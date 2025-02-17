import asyncHandler from "express-async-handler";
import Certification from "../models/certification.model.js";
import Project from "../models/project.model.js";
import Organization from "../models/organization.model.js";

// Issue a new certification for a project
const issueCertification = asyncHandler(async (req, res) => {
  const { projectId, certificateHash, issuedBy } = req.body;

  // Validate project and organization
  const project = await Project.findById(projectId);
  if (!project) {
    res.status(404).json({ message: "Project not found" });
    return;
  }

  const organization = await Organization.findById(project.organization);
  if (!organization) {
    res.status(404).json({ message: "Organization not found" });
    return;
  }

  // Create the certification
  const newCertification = new Certification({
    projectId,
    certificateHash,
    issuedBy,
  });

  const savedCertification = await newCertification.save();
  res.status(201).json(savedCertification);
});

// Validate and get certification details by hash
const getCertificationByHash = asyncHandler(async (req, res) => {
  const { certificateHash } = req.params;

  const certification = await Certification.findOne({ certificateHash }).populate("projectId", "name").exec();
  if (!certification) {
    res.status(404).json({ message: "Certification not found" });
    return;
  }

  res.status(200).json(certification);
});

// Get all certifications for a project
const getCertificationsByProject = asyncHandler(async (req, res) => {
  const { projectId } = req.params;

  const certifications = await Certification.find({ projectId }).populate("projectId", "name").exec();
  if (certifications.length === 0) {
    res.status(404).json({ message: "No certifications found for this project" });
    return;
  }

  res.status(200).json(certifications);
});

// Mark a certification as invalid
const invalidateCertification = asyncHandler(async (req, res) => {
  const { certificateHash } = req.params;

  const certification = await Certification.findOneAndUpdate(
    { certificateHash },
    { isValid: false },
    { new: true }
  );

  if (!certification) {
    res.status(404).json({ message: "Certification not found" });
    return;
  }

  res.status(200).json(certification);
});

export { issueCertification, getCertificationByHash, getCertificationsByProject, invalidateCertification };
