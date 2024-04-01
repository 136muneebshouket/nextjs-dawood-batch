import mongoose from "mongoose";
import bcrypt from 'bcrypt'

const userschema = new mongoose.Schema(
  {
    username: {
      type: String,
      maxLength: [200, "Too much length"],
      trim: true,
      required: [true, "name is required"],
    },
    email: {
      type: String,
      maxLength: [200, "Too much length"],
      required: [true, "email is required"],
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please fill a valid email",
      ],
      trim: true,
      lowercase: true,
      unique: true,
    },
    password: {
      type: String,
      maxLength: [200, "Too much length"],
      trim: true,
      required: [true, "password is required"],
    },
    reset_token: {
      type: String,
    },
    reset_token_expiration: {
      type: Date,
    },
  },
  { timestamps: true }
);

userschema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  this.password = await bcrypt.hash(this.password, 10);
});

export default mongoose.models.users || mongoose.model("users", userschema);
