import { Request, Response } from "express";
import User from "../models/user";
import * as bcrypt from "bcryptjs";

interface CustomRequest extends Request {
  userId?: string;
}

export const updateUser = async (req: CustomRequest, res: Response) => {
  const { userId } = req; // Utilisation de userId depuis req
  const { email, username, password } = req.body;

  if (!userId) {
    return res.status(400).json({ message: "ID utilisateur non fourni" });
  }

  try {
    const user = await User.findById(userId);
    console.log(user);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (email) user.email = email;
    if (username) user.username = username;
    if (password) user.password = await bcrypt.hash(password, 10); // Hash le nouveau mot de passe

    await user.save();

    res.status(200).json({ message: "User updated successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error " });
  }
};

export const getUserById = async (req: Request, res: Response) => {
  try {
    const userId = req.params.id;
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    return res.status(200).json({ username: user.username });
  } catch (error) {
    return res.status(500).json({ message: "Server error", error });
  }
};
