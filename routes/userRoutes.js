import express from "express";
import {
  registerUser,
  loginUser,
  updateProfile,
  verifyKYC,
  getUserById,
} from "../controllers/userController.js";

const router = express.Router();

// User routes
router.post("/signup", registerUser); // Register a new user
router.post("/login", loginUser); // Login with walletAddress
router.put("/update-profile", updateProfile); // Update profile details
router.post("/verify-kyc", verifyKYC); // Admin KYC verification
router.get("/:userId", getUserById); // Get user by ID

export default router;
