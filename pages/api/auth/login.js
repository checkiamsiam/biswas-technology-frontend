import connectMongo from "../../../utils/dbConnect";
import Users from "../../../models/userModel";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export default async function UserController(req, res) {
  try {
    await connectMongo();
    if (req.method === "POST") {
      const { email, password } = req.body;
      const user = await Users.findOne({ email });
      if (!user) {
        return res.status(401).json({ success: false, message: "your entire email or password is invalid" });
      }
      const passwordMatched = await bcrypt.compare(password, user.password);
      if (!passwordMatched) {
        return res.status(401).json({ success: false, message: "your entire email or password is invalid" });
      }
      const loginResponse = { email: user.email, verified: user.verified };
      const token = jwt.sign(loginResponse, process.env.JWT_SECRET, { expiresIn: "7d" });
      res.status(200).json({
        success: true,
        token: token,
        ...loginResponse,
      });
    }
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
}
