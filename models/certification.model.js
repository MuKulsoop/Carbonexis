import mongoose from "mongoose";

const certificationSchema = new mongoose.Schema(
  {
    projectId: { type: mongoose.Schema.Types.ObjectId, ref: "Organization", required: true },
    certificateHash: { type: String, required: true, unique: true },
    issuedBy: { type: String, required: true },
    issuedDate: { type: Date, default: Date.now },
    isValid: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export default mongoose.model("Certification", certificationSchema);
