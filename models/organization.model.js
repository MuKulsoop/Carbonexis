import mongoose from "mongoose";

// Organization Schema
const organizationSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    contactEmail: {
      type: String,
      required: true,
      match: [/\S+@\S+\.\S+/, "Please use a valid email address"],
    },
    contactPhone: {
      type: String,
      required: true,
    },
    logo: {
      type: String, // URL or file path for the organization logo
      required: true,
    },
    website: {
      type: String,
      required: true,
      match: [/(https?:\/\/[^\s]+)/, "Please use a valid URL"],
    },
    projects: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Project",
      },
    ],
  },
  { timestamps: true }
);

const Organization = mongoose.model("Organization", organizationSchema);

export default Organization;
