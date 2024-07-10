import express, { Request, Response } from "express";
import { login, register } from "../controllers/authController";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);

// Route for registering a new user
router.post("/register", async (req: Request, res: Response) => {
  const { username, email, password } = req.body;

  try {
    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    console.log("Original password:", password); // Log original password

    const hashedPassword = await bcrypt.hash(password, 10);

    console.log("Hashed password:", hashedPassword); // Log hashed password

    const user = new User({
      username,
      email,
      password: hashedPassword,
    });

    await user.save();

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET!, {
      expiresIn: "30d",
    });

    res.status(201).json({
      _id: user._id,
      username: user.username,
      email: user.email,
      token,
    });
  } catch (error) {
    console.error("Error during registration:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// Route for logging in a user
router.post("/login", async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (user) {
      console.log("Password to compare:", password); // Log entered password
      console.log("Stored hashed password:", user.password); // Log stored hashed password

      const isMatch = await bcrypt.compare(password, user.password);
      console.log("Password match result:", isMatch); // Log match result

      if (isMatch) {
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET!, {
          expiresIn: "30d",
        });

        res.json({
          _id: user._id,
          username: user.username,
          email: user.email,
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
});

export default router;
