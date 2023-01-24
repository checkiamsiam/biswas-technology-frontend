import { Schema, model } from "mongoose";

const reviewSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    location: String,
    rating: {
      type: Number,
      min: [0, "rating can't be negative"],
      max: [5, "rating should be out of 5"],
      required: true,
    },
    message: String,
  },
  { timestamps: true }
);

export default model("Review", reviewSchema);
