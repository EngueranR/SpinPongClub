import app from "./app";
import authRoutes from "./routes/authRoutes";
import userRoutes from "./routes/userRoutes";
import contactRoutes from "./routes/contactRoutes";
import newsRoutes from "./routes/newsRoutes";
import cors from "cors";

const corsOptions = {
  origin: "http://localhost:4200", // Remplacez cette URL par celle de votre frontend
  optionsSuccessStatus: 200, // pour les navigateurs plus anciens
};

app.use(cors(corsOptions));
const PORT = process.env.PORT || 9000;

app.use("/routes/auth", authRoutes);
app.use("/routes/user", userRoutes);
app.use("/routes/contact", contactRoutes);
app.use("/routes/news", newsRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
