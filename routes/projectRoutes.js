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

router.post("/create", createProject);

router.get("/", getAllProjects);

router.get("/:projectId", getProjectById);

router.put("/:projectId/status",  updateProject);

router.put("/:projectId/upvote",  upvoteProject);

router.post("/:projectId/comments", commentOnProject);

export default router;
