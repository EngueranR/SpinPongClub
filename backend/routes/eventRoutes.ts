import { Router } from "express";
import {
  createEvent,
  updateEvent,
  deleteEvent,
  addParticipant,
} from "../controllers/eventController";

const router = Router();

router.post("/", createEvent);
router.put("/:id", updateEvent);
router.delete("/:id", deleteEvent);
router.post("/:id/participants", addParticipant);

export default router;
