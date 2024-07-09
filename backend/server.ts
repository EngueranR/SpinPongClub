import app from "./app";
import authRoutes from "./routes/authRoutes";
import userRoutes from "./routes/userRoutes";
import contactRoutes from "./routes/contactRoutes";

const PORT = process.env.PORT || 9000;

app.use("/routes/auth", authRoutes);
app.use("/routes/user", userRoutes);
app.use("/routes/contact", contactRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
