import mongoose, { ConnectOptions } from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/spingpong", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    } as ConnectOptions);
    console.log("MongoDB connected...");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

export default connectDB;
