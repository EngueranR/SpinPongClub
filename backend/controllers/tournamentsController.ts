// controllers/tournamentController.ts
import { Request, Response } from "express";
import Tournament from "../models/tournaments";

export const createTournament = async (req: Request, res: Response) => {
  const { name, participants, startDate, maxParticipants, prize } = req.body;
  try {
    const newTournament = new Tournament({
      name,
      participants,
      startDate,
      maxParticipants,
      prize,
    });
    await newTournament.save();
    res.status(201).json(newTournament);
  } catch (error) {
    res.status(500).json({ message: "Erreur lors de la création du tournoi" });
  }
};

export const getAllTournaments = async (req: Request, res: Response) => {
  try {
    const tournaments = await Tournament.find().populate("participants");
    res.json(tournaments);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erreur lors de la récupération des tournois" });
  }
};

export const getTournamentById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const tournament = await Tournament.findById(id).populate("participants");
    if (!tournament) {
      return res.status(404).json({ message: "Tournoi non trouvé" });
    }
    res.json(tournament);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erreur lors de la récupération du tournoi" });
  }
};

export const addParticipantTournament = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { participantId } = req.body;
  try {
    const tournament = await Tournament.findById(id);
    if (!tournament) {
      return res.status(404).json({ message: "Tournoi non trouvé" });
    }
    if (tournament.participants.length >= tournament.maxParticipants) {
      return res.status(400).json({
        message: "Le tournoi a atteint le nombre maximum de participants",
      });
    }
    if (tournament.participants.includes(participantId)) {
      return res.status(400).json({
        message: "Le participant est déjà inscrit au tournoi",
      });
    }
    tournament.participants.push(participantId);
    await tournament.save();
    res.json(tournament);
  } catch (error) {
    res.status(500).json({ message: "Erreur lors de l'ajout du participant" });
  }
};

export const deleteTournament = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const tournament = await Tournament.findByIdAndDelete(id);
    if (!tournament) {
      return res.status(404).json({ message: "Tournoi non trouvé" });
    }
    res.json({ message: "Tournoi supprimé avec succès" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erreur lors de la suppression du tournoi" });
  }
};

export const updateTournament = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, participants, startDate, maxParticipants, prize } = req.body;

  try {
    const tournament = await Tournament.findById(id);

    if (!tournament) {
      return res.status(404).json({ message: "Tournament not found" });
    }

    tournament.name = name || tournament.name;
    tournament.participants = participants || tournament.participants;
    tournament.startDate = startDate || tournament.startDate;
    tournament.maxParticipants = maxParticipants || tournament.maxParticipants;
    tournament.prize = prize || tournament.prize;

    await tournament.save();

    res
      .status(200)
      .json({ message: "Tournament updated successfully", tournament });
  } catch (error) {
    console.error("Error updating tournament:", error);
    res.status(500).json({ message: "Server error" });
  }
};

export const removeParticipantTournament = async (
  req: Request,
  res: Response
) => {
  const { id } = req.params;
  const { participantId } = req.body;
  try {
    const tournament = await Tournament.findById(id);
    if (!tournament) {
      return res.status(404).json({ message: "Tournoi non trouvé" });
    }
    const participantIndex = tournament.participants.indexOf(participantId);
    if (participantIndex === -1) {
      return res
        .status(404)
        .json({ message: "Participant non trouvé dans le tournoi" });
    }
    tournament.participants.splice(participantIndex, 1);
    await tournament.save();
    res.json(tournament);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erreur lors de la suppression du participant" });
  }
};
