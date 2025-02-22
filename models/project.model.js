import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema(
  {
    owner: {
      type: String,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    images: [
      {
        type: String,
        required: true,
      },
    ],
    location: {
      type: String,
      required: true,
    },
    carbonCreditsIssued: {
      type: Number,
      default: 0,
    },
    creditsPricePerTon: {
      type: Number,
      min: 0,
    },
    validator: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Validator",
    },
    blockchainProjectId: {
      type: Number,
      unique: true,
      sparse: true,
    },
    nftLink: {
      type: String,
    },
    nftMinted: {
      type: Boolean,
      default: false,
    },
    status: {
      type: String,
      enum: ["Pending", "NFTMinted", "BlockchainRegistered", "Approved", "Rejected"],
      default: "Pending",
    },
    upvotes: {
      type: Number,
      default: 0,
    },
    comments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment",
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model("Project", ProjectSchema);
