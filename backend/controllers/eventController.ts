import { Request, Response } from "express";
import Event, { IEvent } from "../models/event";

export const createEvent = async (req: Request, res: Response) => {
  const { title, description, participants, startDate } = req.body;

  try {
    const newEvent: IEvent = new Event({
      title,
      description,
      participants,
      startDate,
    });

    await newEvent.save();

    res.status(201).json({ message: "Event created successfully" });
  } catch (error) {
    console.error("Error creating event:", error);
    res.status(500).json({ message: "Server error" });
  }
};

export const updateEvent = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, description, participants, startDate } = req.body;

  try {
    const event = await Event.findById(id).exec();

    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }

    event.title = title || event.title;
    event.description = description || event.description;
    event.participants = participants || event.participants;
    event.startDate = startDate || event.startDate;

    await event.save();

    res.status(200).json({ message: "Event updated successfully", event });
  } catch (error) {
    console.error("Error updating event:", error);
    res.status(500).json({ message: "Server error" });
  }
};

export const deleteEvent = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const event = await Event.findById(id).exec();

    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }

    await event.deleteOne();

    res.status(200).json({ message: "Event deleted successfully" });
  } catch (error) {
    console.error("Error deleting event:", error);
    res.status(500).json({ message: "Server error" });
  }
};

export const addParticipantEvent = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { participantId } = req.body;
  try {
    const event = await Event.findById(id);
    if (!event) {
      return res.status(404).json({ message: "Tournoi non trouvé" });
    }
    if (event.participants.includes(participantId)) {
      return res.status(400).json({
        message: "Le participant est déjà inscrit au tournoi",
      });
    }
    event.participants.push(participantId);
    await event.save();
    res.json(event);
  } catch (error) {
    res.status(500).json({ message: "Erreur lors de l'ajout du participant" });
  }
};

export const removeParticipantEvent = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { participantId } = req.body;
  try {
    const event = await Event.findById(id);
    if (!event) {
      return res.status(404).json({ message: "Tournoi non trouvé" });
    }
    const participantIndex = event.participants.indexOf(participantId);
    if (participantIndex === -1) {
      return res
        .status(404)
        .json({ message: "Participant non trouvé dans le tournoi" });
    }
    event.participants.splice(participantIndex, 1);
    await event.save();
    res.json(event);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erreur lors de la suppression du participant" });
  }
};
export const getAllEvents = async (req: Request, res: Response) => {
  try {
    const events = await Event.find();
    return res.status(200).json(events);
  } catch (error) {
    return res.status(500).json({ message: "Server error", error });
  }
};
