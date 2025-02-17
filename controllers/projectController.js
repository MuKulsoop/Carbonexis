import Project from "../models/project.model.js";
import User from "../models/user.model.js";
import cloudinary from "../config/cloudinary.js"; // Cloudinary utility import

// Create new project
export const createProject = async (req, res) => {
  const { name, description, location, creditsPricePerTon, validator, images } = req.body;
  const owner = req.userId; // Assuming JWT token is used for authentication

  try {
    // Upload images to Cloudinary
    const uploadedImages = [];
    for (let image of images) {
      const uploadedImage = await cloudinary.uploader.upload(image, {
        folder: "projects", // Folder in Cloudinary for organization
      });
      uploadedImages.push(uploadedImage.secure_url); // Using secure_url for the image URL
    }

    // Create a new project
    const project = new Project({
      owner,
      name,
      description,
      location,
      creditsPricePerTon,
      validator,
      images: uploadedImages,
    });

    await project.save();
    res.status(201).json({ message: "Project created successfully", project });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all projects
export const getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find().populate("owner", "username").populate("validator", "username").populate("comments");
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get project by ID
export const getProjectById = async (req, res) => {
  const { projectId } = req.params;

  try {
    const project = await Project.findById(projectId)
      .populate("owner", "username")
      .populate("validator", "username")
      .populate("comments");
    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }
    res.status(200).json(project);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update project details (e.g., description, location, etc.)
export const updateProject = async (req, res) => {
  const { projectId } = req.params;
  const { name, description, location, creditsPricePerTon, status, validator, images } = req.body;

  try {
    // Handle image updates
    let uploadedImages = [];
    if (images) {
      for (let image of images) {
        const uploadedImage = await cloudinary.uploader.upload(image, {
          folder: "projects", // Folder in Cloudinary for organization
        });
        uploadedImages.push(uploadedImage.secure_url);
      }
    }

    const updatedProject = await Project.findByIdAndUpdate(
      projectId,
      {
        name,
        description,
        location,
        creditsPricePerTon,
        status,
        validator,
        images: uploadedImages.length ? uploadedImages : undefined,
      },
      { new: true }
    );

    if (!updatedProject) {
      return res.status(404).json({ message: "Project not found" });
    }

    res.status(200).json({ message: "Project updated successfully", project: updatedProject });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Upvote project
export const upvoteProject = async (req, res) => {
  const { projectId } = req.params;

  try {
    const project = await Project.findById(projectId);
    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }

    project.upvotes += 1;
    await project.save();

    res.status(200).json({ message: "Project upvoted successfully", upvotes: project.upvotes });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Comment on project
export const commentOnProject = async (req, res) => {
  const { projectId } = req.params;
  const { userId, commentText } = req.body;

  try {
    const project = await Project.findById(projectId);
    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }

    //Comment model
    const newComment = new Comment({
      user: userId,
      text: commentText,
      project: projectId,
    });

    await newComment.save();
    project.comments.push(newComment._id);
    await project.save();

    res.status(200).json({ message: "Comment added successfully", comment: newComment });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
