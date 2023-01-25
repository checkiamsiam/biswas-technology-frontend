import mongoose, { Schema, model } from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: [true, "must be require"],
      trim: true,
      unique: true,
      lowercase: true,
      validate: [validator.isEmail, "provide a valid email"],
    },
    password: {
      type: String,
      required: true,
      minLength: [8, "password must be 8 character"],
    },
    verified: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  const hash = await bcrypt.hash(this.password, 10);
  this.password = hash;
  next();
});

mongoose.models = {};

export default model("User", userSchema);
