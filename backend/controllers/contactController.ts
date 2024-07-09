import { Request, Response } from "express";
import Contact from "../models/contact";

export const createContact = async (req: Request, res: Response) => {
  console.log("createContact called"); // Log pour vérifier si le contrôleur est appelé
  try {
    const { name, email, message } = req.body;
    console.log("Request body:", req.body); // Log pour vérifier les données de la requête
    const newContact = new Contact({ name, email, message });
    await newContact.save();
    res.status(201).json({ message: "Contact message created successfully" });
  } catch (error) {
    console.error("Error creating contact:", error); // Log pour capturer les erreurs
    res.status(500).json({ error: "Internal Server Error" });
  }
};
