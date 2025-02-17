import express from "express";
import {
  issueCarbonCredits,
  getCarbonCreditsByProject,
  getCarbonCreditsByUser,
  purchaseCarbonCredit,
} from "../controllers/CarbonCreditController.js";
import { protect } from "../middlewares/auth.js";

const router = express.Router();

router.post("/issue", protect, issueCarbonCredits);

router.get("/project/:projectId", protect, getCarbonCreditsByProject);

router.get("/user", protect, getCarbonCreditsByUser);

router.post("/:creditId/purchase", protect, purchaseCarbonCredit);

export default router;
