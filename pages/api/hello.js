import connectDB from "../../utils/dbConnect";
const handler = async (req, res) => {
  res.status(200).json({ name: "John Doe" });
};
export default connectDB(handler);
