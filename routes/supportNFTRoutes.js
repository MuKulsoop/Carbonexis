import express from "express";
import multer from "multer"; // For handling file uploads
import {
  uploadSupportNFT,
  getSupportNFTsByProject,
  getSupportNFTById,
  purchaseSupportNFT,
  getNFTsByUser,
} from "../controllers/supportNFTController.js";
import { protect } from "../middlewares/auth.js";

const router = express.Router();

const upload = multer({ dest: "uploads/" });

router.post("/upload", protect, upload.single("nftImage"), uploadSupportNFT);

router.get("/project/:projectId", protect, getSupportNFTsByProject);

router.get("/:nftId", protect, getSupportNFTById);

router.post("/:nftId/purchase", protect, purchaseSupportNFT);

router.get("/user", protect, getNFTsByUser);

export default router;
