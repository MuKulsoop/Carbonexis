import express from "express";
import {
  issueCertification,
  getCertificationByHash,
  getCertificationsByProject,
  invalidateCertification,
} from "../controllers/certificationController.js";
import { protect } from "../middlewares/auth.js";

const router = express.Router();

router.post("/issue", protect, issueCertification);

router.get("/:certificateHash", protect, getCertificationByHash);

router.get("/project/:projectId", protect, getCertificationsByProject);

router.put("/:certificateHash/invalidate", protect, invalidateCertification);

export default router;
