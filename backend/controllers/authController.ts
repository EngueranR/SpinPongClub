import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import { IUser, User } from "../models/user";
import jwt from "jsonwebtoken";

export const register = async (req: Request, res: Response) => {
  const { username, email, password, lastname, firstname, isAdmin } = req.body;

  try {
    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser: IUser = new User({
      username,
      email,
      password: hashedPassword,
      lastname,
      firstname,
      isAdmin,
    });

    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).json({ message: "Server error" });
  }
};

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (user) {
      const isMatch = await bcrypt.compare(password, user.password);

      if (isMatch) {
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET!, {
          expiresIn: "30d",
        });

        res.json({
          _id: user._id,
          username: user.username,
          email: user.email,
          lastname: user.lastname,
          firstname: user.firstname,
          isAdmin: user.isAdmin,
          token,
        });
      } else {
        res.status(401).json({ message: "Invalid email or password" });
      }
    } else {
      res.status(401).json({ message: "Invalid email or password" });
    }
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
