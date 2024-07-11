import { Router } from "express";
import {
  createTournament,
  getAllTournaments,
  getTournamentById,
  addParticipantTournament,
  deleteTournament,
  updateTournament,
  removeParticipantTournament,
} from "../controllers/tournamentsController";

const router = Router();

router.post("/", createTournament);
router.get("/", getAllTournaments);
router.get("/:id", getTournamentById);
router.post("/:id/participants", addParticipantTournament);
router.delete("/:id", deleteTournament);
router.put("/:id", updateTournament);
router.delete("/:id/participants", removeParticipantTournament);

export default router;
