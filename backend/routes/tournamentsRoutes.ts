import { Router } from "express";
import {
  createTournament,
  getAllTournaments,
  getTournamentById,
  addParticipant,
  deleteTournament,
  updateTournament,
} from "../controllers/tournamentsController";

const router = Router();

router.post("/", createTournament);
router.get("/", getAllTournaments);
router.get("/:id", getTournamentById);
router.post("/:id/participants", addParticipant);
router.delete("/:id", deleteTournament);
router.put("/:id", updateTournament);

export default router;
