import mongoose from "mongoose";
import connectMongo from "../../../utils/dbConnect";
const Reviews = mongoose.model("Review");

export default async function reviewsController(req, res) {
  try {
    await connectMongo();
    if (req.method === "GET") {
      const reviews = await Reviews.find({});
      res.status(200).json(reviews);
    }
    if (req.method === "POST") {
      const review = new Reviews(req.body);
      const isReviewed = await Reviews.find({ name: review.name });
      if (isReviewed) {
        res.status(400).json({ success: false, message: "already reviewed" });
      } else {
        const newAddedJob = await review.save();
        res.status(200).json(newAddedJob);
      }
    }
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
}
