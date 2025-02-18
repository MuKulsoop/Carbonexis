import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// Register new user
export const registerUser = async (req, res) => {
  const { walletAddress, username, email, profileImage, password } = req.body;

  try {
    // Validate fields
    if (!username || !password) {
      return res.status(400).json({ message: "username and password are required." });
    }

    if (username.length < 3 || username.length > 30) {
      return res.status(400).json({ message: "Username must be between 3 and 30 characters." });
    }

    // Check if the user with the given wallet address or email already exists
    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(400).json({ message: "User with this email already exists." });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const user = new User({
      walletAddress,
      username,
      email,
      profileImage: profileImage || "", // Set empty string if profile image is not provided
      password: hashedPassword,
    });

    // Save the user to the database
    await user.save();

    // Optionally, generate a token (useful for frontend authentication)
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

    res.status(201).json({ message: "User registered successfully", user, token });
  } catch (error) {
    console.error(error); // Log error for debugging
    res.status(500).json({ message: "Server error. Please try again later." });
  }
};

// Login user (using username or email)
export const loginUser = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Find user by username or email
    const user = await User.findOne({ $or: [{ username }, { email }] });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Compare the password with the hashed password stored in the database
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid password" });
    }

    // Generate JWT token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

    res.status(200).json({ message: "Login successful", token, user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error. Please try again later." });
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
    console.error(error);
    res.status(500).json({ message: "Server error. Please try again later." });
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
    console.error(error);
    res.status(500).json({ message: "Server error. Please try again later." });
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
    console.error(error);
    res.status(500).json({ message: "Server error. Please try again later." });
  }
};
