import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import User from "../models/user.model.js";

// Protect route middleware to ensure user is authenticated
const protect = asyncHandler(async (req, res, next) => {
  let token = req.headers.authorization;

  if (token && token.startsWith("Bearer")) {
    try {
      const decoded = jwt.verify(token.split(" ")[1], process.env.JWT_SECRET);
      req.user = await User.findById(decoded.id).select("-password");
      next();
    } catch (error) {
      res.status(401).json({ message: "Not authorized, token failed" });
    }
  } else {
    res.status(401).json({ message: "Not authorized, no token" });
  }
});

// Middleware for checking if the user is a ProjectOwner
const isProjectOwner = asyncHandler(async (req, res, next) => {
  if (req.user.role !== "ProjectOwner") {
    return res.status(403).json({ message: "Permission denied, not a project owner" });
  }
  next();
});

// Middleware for checking if the user is a Validator or Admin
const isValidatorOrAdmin = asyncHandler(async (req, res, next) => {
  if (req.user.role !== "Validator" && req.user.role !== "Admin") {
    return res.status(403).json({ message: "Permission denied, not a validator or admin" });
  }
  next();
});

// Middleware for checking if the user is an Admin
const isAdmin = asyncHandler(async (req, res, next) => {
  if (req.user.role !== "Admin") {
    return res.status(403).json({ message: "Permission denied, not an admin" });
  }
  next();
});

export { protect, isProjectOwner, isValidatorOrAdmin, isAdmin };
