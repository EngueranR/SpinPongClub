import app from "./app";
import authRoutes from "./routes/authRoutes";

const PORT = process.env.PORT || 9000;

app.use("/routes/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
