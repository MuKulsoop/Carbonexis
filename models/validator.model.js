import mongoose from "mongoose";

const ValidatorSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    organization: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
    },
    licenseId: {
      type: String,
      required: true,
      unique: true,
      uppercase: true,
    },
    approvedProjects: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Project",
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model("Validator", ValidatorSchema);
