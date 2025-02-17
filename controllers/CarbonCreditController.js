import asyncHandler from "express-async-handler";
import CarbonCredit from "../models/CarbonCredit.model.js";
import Project from "../models/project.model.js";
import User from "../models/user.model.js";

// Issue new carbon credits for a project
const issueCarbonCredits = asyncHandler(async (req, res) => {
  const { projectId, tokenId, amount, pricePerTon } = req.body;

  // Validate project and user
  const project = await Project.findById(projectId);
  if (!project) {
    res.status(404).json({ message: "Project not found" });
    return;
  }

  const user = await User.findById(req.user._id);
  if (!user) {
    res.status(404).json({ message: "User not found" });
    return;
  }

  // Create the carbon credit
  const newCarbonCredit = new CarbonCredit({
    project: projectId,
    owner: req.user._id,
    tokenId,
    amount,
    pricePerTon,
  });

  const savedCarbonCredit = await newCarbonCredit.save();
  res.status(201).json(savedCarbonCredit);
});

// Get carbon credits for a project
const getCarbonCreditsByProject = asyncHandler(async (req, res) => {
  const { projectId } = req.params;

  const project = await Project.findById(projectId);
  if (!project) {
    res.status(404).json({ message: "Project not found" });
    return;
  }

  const carbonCredits = await CarbonCredit.find({ project: projectId }).populate("owner", "username email").exec();
  res.status(200).json(carbonCredits);
});

// Get carbon credits owned by a user
const getCarbonCreditsByUser = asyncHandler(async (req, res) => {
  const userId = req.user._id;

  const carbonCredits = await CarbonCredit.find({ owner: userId }).populate("project", "name").exec();
  res.status(200).json(carbonCredits);
});

// Buy carbon credits (purchase by a buyer)
const purchaseCarbonCredit = asyncHandler(async (req, res) => {
  const { creditId } = req.params;
  const { paymentDetails } = req.body; // Assume payment details are processed (could integrate with Stripe, etc.)

  const carbonCredit = await CarbonCredit.findById(creditId).exec();
  if (!carbonCredit) {
    res.status(404).json({ message: "Carbon credit not found" });
    return;
  }

  // Simulate purchasing logic: payment processing and updating ownership
  const buyer = await User.findById(req.user._id);
  if (!buyer) {
    res.status(404).json({ message: "Buyer not found" });
    return;
  }

  if (!carbonCredit.availableForSale) {
    res.status(400).json({ message: "This carbon credit is no longer available for sale" });
    return;
  }

  // Update the owner of the carbon credit after successful purchase
  carbonCredit.owner = buyer._id;
  carbonCredit.availableForSale = false; // Mark as sold

  const updatedCredit = await carbonCredit.save();
  res.status(200).json({
    message: "Carbon credit purchased successfully",
    credit: updatedCredit,
    buyer: buyer.username,
  });
});

export {
  issueCarbonCredits,
  getCarbonCreditsByProject,
  getCarbonCreditsByUser,
  purchaseCarbonCredit,
};
