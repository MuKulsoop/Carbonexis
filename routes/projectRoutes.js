import express from "express";
import {
  createProject,
  getAllProjects,
  getProjectById,
 updateProject,
  upvoteProject,
  commentOnProject
} from "../controllers/projectController.js";
import { protect, isProjectOwner, isValidatorOrAdmin, isAdmin } from "../middlewares/auth.js";

const router = express.Router();

router.post("/create", protect, isProjectOwner, createProject);

router.get("/", getAllProjects);

router.get("/:projectId", getProjectById);

router.put("/:projectId/status", protect, isValidatorOrAdmin, updateProject);

router.put("/:projectId/upvote", protect, upvoteProject);

router.post("/:projectId/comments", protect, commentOnProject);

export default router;
