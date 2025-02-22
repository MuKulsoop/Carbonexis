import Project from "../models/project.model.js";
import User from "../models/user.model.js";
import cloudinary from "../config/cloudinary.js"; // Cloudinary utility import

// Create new project (now expects blockchain data from frontend)
export const createProject = async (req, res) => {
  try {
    const { name, description, location, creditsPricePerTon, carbonCreditsIssued, images, nftLink, blockchainProjectId, owner } = req.body;

    if (!Array.isArray(images)) {
      return res.status(400).json({ message: "Images must be an array." });
    }

    const validImages = images.filter(image => typeof image === "string" && image.startsWith("data:image"));
    if (validImages.length !== images.length) {
      return res.status(400).json({ message: "Some images are invalid." });
    }

    console.log("Uploading images to Cloudinary...");
    const uploadedImages = await Promise.all(
      validImages.map(async (image) => {
        try {
          const uploadedImage = await cloudinary.uploader.upload(image, { folder: "projects" });
          console.log("Uploaded:", uploadedImage.secure_url);
          return uploadedImage.secure_url;
        } catch (error) {
          console.error("Cloudinary Upload Failed:", error);
          throw new Error("Image upload failed.");
        }
      })
    );

    const project = new Project({
      owner,
      name,
      description,
      location,
      creditsPricePerTon,
      carbonCreditsIssued,
      images: uploadedImages,
      nftLink,
      blockchainProjectId,
      status: "BlockchainRegistered",
      nftMinted: true,
    });

    await project.save();
    res.status(201).json({ message: "Project created successfully", project });
  } catch (error) {
    console.error("Error creating project:", error);
    res.status(500).json({ message: error.message });
  }
};


// Get all projects
export const getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find()
      .populate("owner", "username")
      .populate("validator", "username")
      .populate("comments");
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

// Update project details (blockchain details are immutable)
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

    // Comment model
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
