import dotenv from "dotenv";
import mongoose from "mongoose";
import app from "./app";

dotenv.config();

const port = Number(process.env.PORT) || 3000;
const mongoUri = process.env.MONGODB_URI || "";

const startServer = async () => {
  if (!mongoUri) {
    console.error("MONGODB_URI is missing in .env");
    process.exit(1);
  }

  try {
    await mongoose.connect(mongoUri);
    console.log("MongoDB connected");

    app.listen(port, () => {
      console.log(`Server listening on http://localhost:${port}`);
    });
  } catch (error) {
    console.error("MongoDB connection failed:", error);
    process.exit(1);
  }
};

startServer();
