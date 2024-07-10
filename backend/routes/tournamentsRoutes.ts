import { Router } from "express";
import {
  createTournament,
  getAllTournaments,
  getTournamentById,
  addParticipant,
  deleteTournament,
} from "../controllers/tournamentsController";

const router = Router();

router.post("/", createTournament);
router.get("/", getAllTournaments);
router.get("/:id", getTournamentById);
router.post("/:id/participants", addParticipant);
router.delete("/:id", deleteTournament);

export default router;
