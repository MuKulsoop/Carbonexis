import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import uploadRoutes from "./routes/uploadRoutes.js";
import carbonCreditRoutes from "./routes/carbonCreditRoutes.js";
import certificationRoutes from "./routes/certificationRoutes.js";
import projectRoutes from "./routes/projectRoutes.js";
import supportNFTRoutes from "./routes/supportNFTRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import validatorRoutes from "./routes/validatorRoutes.js";

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(morgan("dev"));
app.use(express.json({ limit: "50mb" })); 
app.use(express.urlencoded({ limit: "50mb", extended: true })); 

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/upload", uploadRoutes);
app.use("/api/carbon-credits", carbonCreditRoutes);  // Added Carbon Credit Routes
app.use("/api/certifications", certificationRoutes);  // Added Certification Routes
app.use("/api/projects", projectRoutes);  // Added Project Routes
app.use("/api/support-nfts", supportNFTRoutes);  // Added Support NFT Routes
app.use("/api/users", userRoutes);  // Added User Routes
app.use("/api/validators", validatorRoutes);  // Added Validator Routes

app.get("/", (req, res) => res.send("API Running"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
