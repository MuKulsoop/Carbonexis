import express from "express";
import {
  createValidator,
  getAllValidators,
  getValidatorById,
  updateValidator,
  addApprovedProject,
  removeApprovedProject,
} from "../controllers/validatorController.js";
import { protect, isAdmin } from "../middlewares/auth.js";

const router = express.Router();

router.post("/create", protect, isAdmin, createValidator);

router.get("/", protect, isAdmin, getAllValidators);

router.get("/:id", protect, isAdmin, getValidatorById);

router.put("/:id", protect, isAdmin, updateValidator);

router.post("/:id/approve", protect, isAdmin, addApprovedProject);

router.delete("/:id/approve", protect, isAdmin, removeApprovedProject);

export default router;
