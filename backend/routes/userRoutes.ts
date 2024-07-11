import express from "express";
import { updateUser, getUserById } from "../controllers/userController";
import { authMiddleware } from "../middleware/authMiddleware";

const router = express.Router();

// Route to update user details
router.put("/update", authMiddleware, updateUser);
router.get("/:id", getUserById);

export default router;
