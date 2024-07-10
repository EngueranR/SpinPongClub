import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const secretKey = "SpingSpong";

interface CustomRequest extends Request {
  userId?: string;
}

export const authMiddleware = (
  req: CustomRequest,
  res: Response,
  next: NextFunction
) => {
  const token = req.header("Authorization")?.replace("Bearer ", "");

  if (!token) {
    return res
      .status(401)
      .json({ message: "Pas de token, autorisation refusée" });
  }

  try {
    const decoded = jwt.verify(token, secretKey) as { id: string };
    console.log("Decoded token:", decoded);
    req.userId = decoded.id;
    console.log(req.userId);
    next();
  } catch (err) {
    res.status(401).json({ message: "Token non valide" });
  }
};
