import express from "express";
import bodyParser from "body-parser";
import connectDB from "./config/db";
import authRoutes from "./routes/authRoutes";
import userRoutes from "./routes/userRoutes";
import contactRoutes from "./routes/contactRoutes";
import newsRoutes from "./routes/newsRoutes";
import tournamentsRoutes from "./routes/tournamentsRoutes";

const app = express();

// Connect to database
connectDB();

// Middleware
app.use(bodyParser.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/news", newsRoutes);
app.use("/api/tournaments", tournamentsRoutes);

export default app;
