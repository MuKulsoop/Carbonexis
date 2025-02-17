import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// Register new user
export const registerUser = async (req, res) => {
  const { walletAddress, username, email, profileImage } = req.body;

  try {
    // Check if the user with the given wallet address or email already exists
    const userExist = await User.findOne({ $or: [{ walletAddress }, { email }] });
    if (userExist) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Create new user
    const user = new User({
      walletAddress,
      username,
      email,
      profileImage,
    });

    await user.save();
    res.status(201).json({ message: "User registered successfully", user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Login user (using walletAddress)
export const loginUser = async (req, res) => {
  const { walletAddress } = req.body;

  try {
    const user = await User.findOne({ walletAddress });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Generate JWT token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

    res.status(200).json({ message: "Login successful", token, user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update user profile
export const updateProfile = async (req, res) => {
  const { userId, username, profileImage, email, kycVerified } = req.body;

  try {
    // Check if email already exists for other user
    const existingUser = await User.findOne({ email, _id: { $ne: userId } });
    if (existingUser) {
      return res.status(400).json({ message: "Email is already taken" });
    }

    // Update user profile details
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { username, profileImage, email, kycVerified },
      { new: true }
    );

    res.status(200).json({ message: "Profile updated", user: updatedUser });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Verify KYC (admin functionality)
export const verifyKYC = async (req, res) => {
  const { userId } = req.body;

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    user.kycVerified = true;
    await user.save();

    res.status(200).json({ message: "KYC Verified successfully", user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get user by ID
export const getUserById = async (req, res) => {
  const { userId } = req.params;

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
