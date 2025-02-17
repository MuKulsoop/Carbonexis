import asyncHandler from "express-async-handler";
import SupportNFT from "../models/supportnft.model.js";
import Project from "../models/project.model.js";
import User from "../models/user.model.js";
import cloudinary from "../config/cloudinary.js"; // Cloudinary setup for image storage

// Upload a new SupportNFT related to a project
const uploadSupportNFT = asyncHandler(async (req, res) => {
  const { projectId, price } = req.body;
  const { tokenId, metadataURI } = req.body; // Assume tokenId is generated off-chain or from the frontend

  // Validate project
  const project = await Project.findById(projectId);
  if (!project) {
    res.status(404).json({ message: "Project not found" });
    return;
  }

  // Upload NFT related media to Cloudinary (image/video)
  let nftImageUrl = '';
  if (req.file) {
    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: "support_nfts", // Cloudinary folder for organization
    });
    nftImageUrl = result.secure_url; // Get the URL of the uploaded image/video
  }

  // Create new SupportNFT
  const newSupportNFT = new SupportNFT({
    project: projectId,
    owner: req.user._id,
    tokenId,
    metadataURI,
    price,
  });

  // If media is uploaded, add its URL to the metadataURI or associate as needed
  if (nftImageUrl) {
    newSupportNFT.metadataURI = nftImageUrl;
  }

  const savedSupportNFT = await newSupportNFT.save();
  res.status(201).json(savedSupportNFT);
});

// Get all SupportNFTs for a specific project
const getSupportNFTsByProject = asyncHandler(async (req, res) => {
  const { projectId } = req.params;

  const project = await Project.findById(projectId);
  if (!project) {
    res.status(404).json({ message: "Project not found" });
    return;
  }

  const supportNFTs = await SupportNFT.find({ project: projectId }).populate("owner", "username email").exec();
  res.status(200).json(supportNFTs);
});

// Get a single SupportNFT by its ID
const getSupportNFTById = asyncHandler(async (req, res) => {
  const { nftId } = req.params;

  const supportNFT = await SupportNFT.findById(nftId).populate("owner", "username email").exec();
  if (!supportNFT) {
    res.status(404).json({ message: "NFT not found" });
    return;
  }

  res.status(200).json(supportNFT);
});

// Purchase a SupportNFT (user buys NFT to support the project)
const purchaseSupportNFT = asyncHandler(async (req, res) => {
  const { nftId } = req.params;
  const { paymentDetails } = req.body; // Assume the payment details will be processed (could integrate with Stripe, etc.)

  // Find the SupportNFT to be purchased
  const supportNFT = await SupportNFT.findById(nftId).populate("project", "name").exec();
  if (!supportNFT) {
    res.status(404).json({ message: "NFT not found" });
    return;
  }

  // Check if the user has sufficient funds or credits (you would typically check user's balance here)
  // Simulate purchasing logic
  // Example: Assume user balance is checked and payment is processed correctly
  const user = await User.findById(req.user._id);
  if (!user) {
    res.status(404).json({ message: "User not found" });
    return;
  }

  // Simulate deducting user balance (would be done after successful payment)
  // For now, let's skip real payment and assume it's successful
  // After purchase, update the project with the sale details if needed

  // In a real-world scenario, you would handle payment processing here (via a gateway, blockchain, etc.)

  res.status(200).json({
    message: "NFT purchased successfully",
    nft: supportNFT,
    buyer: user.username,
  });
});

// Get all SupportNFTs created by a specific user (owner)
const getNFTsByUser = asyncHandler(async (req, res) => {
  const userId = req.user._id;

  const userNFTs = await SupportNFT.find({ owner: userId }).populate("project", "name").exec();
  res.status(200).json(userNFTs);
});

export {
  uploadSupportNFT,
  getSupportNFTsByProject,
  getSupportNFTById,
  purchaseSupportNFT,
  getNFTsByUser,
};
