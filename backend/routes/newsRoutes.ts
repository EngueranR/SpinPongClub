import { Router } from "express";
import {
  getAllNews,
  getNewsById,
  createNews,
  deleteNews,
} from "../controllers/newsController";

const router = Router();

router.get("/", getAllNews);
router.get("/:id", getNewsById);
router.post("/", createNews);
router.delete("/:id", deleteNews);

export default router;
