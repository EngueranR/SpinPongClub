// controllers/newsController.ts
import { Request, Response } from "express";
import News from "../models/news";

export const getAllNews = async (req: Request, res: Response) => {
  try {
    const news = await News.find();
    res.json(news);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erreur lors de la récupération des news" });
  }
};

export const getNewsById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const news = await News.findById(id);
    if (!news) {
      return res.status(404).json({ message: "News non trouvée" });
    }
    res.json(news);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erreur lors de la récupération de la news" });
  }
};

export const createNews = async (req: Request, res: Response) => {
  const { title, content } = req.body;
  try {
    const newNews = new News({ title, content });
    await newNews.save();
    res.status(201).json(newNews);
  } catch (error) {
    res.status(500).json({ message: "Erreur lors de la création de la news" });
  }
};

export const deleteNews = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const news = await News.findByIdAndDelete(id);
    if (!news) {
      return res.status(404).json({ message: "News non trouvée" });
    }
    res.json({ message: "News supprimée avec succès" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erreur lors de la suppression de la news" });
  }
};
