import express, { Request, Response } from "express";
import { login, register } from "../controllers/authController";
import User from "../models/user";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);

export default router;
