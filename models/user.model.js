import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    walletAddress: {
      type: String,
      default: '',
    },
    username: {
      type: String,
      trim: true,
      minlength: 3,
      maxlength: 30,
    },
    email: {
      type: String,
      unique: true,
      sparse: true,
      lowercase: true,
      match: [/^\S+@\S+\.\S+$/, "Invalid email format"],
    },
    password:{
      type: String,
      required: true
    }
    ,
    profileImage: {
      type: String,
      default: "",
    },
    role: {
      type: String,
      enum: ["User", "Organization", "Validator", "Admin"],
      default: "User",
    },
    kycVerified: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", UserSchema);
