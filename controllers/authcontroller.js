import asyncHandler from "express-async-handler";
import User from "../models/user.model.js";
import generateToken from "../utils/generateToken.js";

const registerUser = asyncHandler(async (req, res) => {
  const { walletAddress, username, email, profileImage, role } = req.body;

  const userExists = await User.findOne({ walletAddress });
  if (userExists) return res.status(400).json({ message: "User already exists" });

  const user = await User.create({
    walletAddress,
    username,
    email,
    profileImage,
    role,
  });

  res.status(201).json({
    _id: user.id,
    walletAddress: user.walletAddress,
    username: user.username,
    email: user.email,
    profileImage: user.profileImage,
    role: user.role,
    kycVerified: user.kycVerified,
    token: generateToken(user._id),
  });
});

const loginUser = asyncHandler(async (req, res) => {
  const { walletAddress } = req.body;
  const user = await User.findOne({ walletAddress });

  if (user) {
    res.json({
      _id: user.id,
      walletAddress: user.walletAddress,
      username: user.username,
      email: user.email,
      profileImage: user.profileImage,
      role: user.role,
      kycVerified: user.kycVerified,
      token: generateToken(user._id),
    });
  } else {
    res.status(401).json({ message: "User not found" });
  }
});

const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user.id);

  if (user) {
    res.json({
      _id: user.id,
      walletAddress: user.walletAddress,
      username: user.username,
      email: user.email,
      profileImage: user.profileImage,
      role: user.role,
      kycVerified: user.kycVerified,
    });
  } else {
    res.status(404).json({ message: "User not found" });
  }
});

export { registerUser, loginUser, getUserProfile };
