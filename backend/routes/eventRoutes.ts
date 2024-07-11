import { Router } from "express";
import {
  createEvent,
  updateEvent,
  deleteEvent,
  addParticipantEvent,
  removeParticipantEvent,
  getAllEvents,
} from "../controllers/eventController";

const router = Router();

router.post("/", createEvent);
router.put("/:id", updateEvent);
router.delete("/:id", deleteEvent);
router.post("/:id/participants", addParticipantEvent);
router.delete("/:id/participants", removeParticipantEvent);
router.get("/", getAllEvents);

export default router;
