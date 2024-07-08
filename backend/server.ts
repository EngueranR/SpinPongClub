import app from "./app";
import authRoutes from "./routes/authRoutes";
import userRoutes from "./routes/userRoutes";

const PORT = process.env.PORT || 9000;

app.use("/routes/auth", authRoutes);
app.use("/api/user", userRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
