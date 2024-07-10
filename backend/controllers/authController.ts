import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import { IUser, User } from "../models/user";

export const register = async (req: Request, res: Response) => {
  const { username, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already in use" });
    }

    console.log("Original password:", password); // Log original password

    const hashedPassword = await bcrypt.hash(password, 10);

    console.log("Hashed password:", hashedPassword); // Log hashed password

    const newUser: IUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
