import connectMongo from "../../../utils/dbConnect";
import Users from "../../../models/userModel";

export default async function UserController(req, res) {
  try {
    await connectMongo();
    if (req.method === "POST") {
      const user = new Users(req.body);
      const isRegistered = await Users.findOne({ email: user.email });
      if (isRegistered) {
        res.status(400).json({ success: false, message: "already registered" });
      } else {
        await user.save();
        res.status(200).json({ success: true, message: "registration success" });
      }
    }
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
}
