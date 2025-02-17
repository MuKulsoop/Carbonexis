import asyncHandler from "express-async-handler";
import Validator from "../models/validator.model.js";
import User from "../models/user.model.js";
import Project from "../models/project.model.js";

// Create a new validator
const createValidator = asyncHandler(async (req, res) => {
  const { userId, organization, licenseId } = req.body;

  // Check if the user already has a validator role
  const existingValidator = await Validator.findOne({ userId });
  if (existingValidator) {
    res.status(400).json({ message: "User already has a validator role" });
    return;
  }

  // Create new Validator
  const newValidator = new Validator({
    userId,
    organization,
    licenseId,
  });

  const validator = await newValidator.save();

  res.status(201).json(validator);
});

// Get all validators
const getAllValidators = asyncHandler(async (req, res) => {
  const validators = await Validator.find().populate("userId", "username email").exec();
  res.status(200).json(validators);
});

// Get a specific validator by ID
const getValidatorById = asyncHandler(async (req, res) => {
  const validator = await Validator.findById(req.params.id).populate("userId", "username email").exec();
  
  if (!validator) {
    res.status(404).json({ message: "Validator not found" });
    return;
  }

  res.status(200).json(validator);
});

// Update a validator's details (organization or licenseId)
const updateValidator = asyncHandler(async (req, res) => {
  const { organization, licenseId } = req.body;

  const validator = await Validator.findById(req.params.id);
  
  if (!validator) {
    res.status(404).json({ message: "Validator not found" });
    return;
  }

  validator.organization = organization || validator.organization;
  validator.licenseId = licenseId || validator.licenseId;

  const updatedValidator = await validator.save();

  res.status(200).json(updatedValidator);
});

// Add a project to the validator's approved projects
const addApprovedProject = asyncHandler(async (req, res) => {
  const { projectId } = req.body;

  const validator = await Validator.findById(req.params.id);
  const project = await Project.findById(projectId);

  if (!validator) {
    res.status(404).json({ message: "Validator not found" });
    return;
  }

  if (!project) {
    res.status(404).json({ message: "Project not found" });
    return;
  }

  // Add the project to approvedProjects if it's not already approved
  if (!validator.approvedProjects.includes(projectId)) {
    validator.approvedProjects.push(projectId);
    await validator.save();
    res.status(200).json({ message: "Project approved successfully", validator });
  } else {
    res.status(400).json({ message: "Project already approved by this validator" });
  }
});

// Remove a project from the validator's approved projects
const removeApprovedProject = asyncHandler(async (req, res) => {
  const { projectId } = req.body;

  const validator = await Validator.findById(req.params.id);

  if (!validator) {
    res.status(404).json({ message: "Validator not found" });
    return;
  }

  // Remove the project from approvedProjects if it exists
  const index = validator.approvedProjects.indexOf(projectId);
  if (index !== -1) {
    validator.approvedProjects.splice(index, 1);
    await validator.save();
    res.status(200).json({ message: "Project removed from approved list", validator });
  } else {
    res.status(400).json({ message: "Project not found in approved list" });
  }
});

export {
  createValidator,
  getAllValidators,
  getValidatorById,
  updateValidator,
  addApprovedProject,
  removeApprovedProject,
};
