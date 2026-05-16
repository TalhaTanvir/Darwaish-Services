import mongoose from "mongoose";

export const connectDatabase = async (): Promise<void> => {
  const mongoUri = process.env.MONGODB_URI || "";

  if (!mongoUri) {
    throw new Error("MONGODB_URI is missing in .env");
  }

  await mongoose.connect(mongoUri);
  console.log("MongoDB connected");
};

export const initializeDatabase = async (): Promise<void> => {
  try {
    await connectDatabase();
  } catch (error) {
    console.error("MongoDB connection failed:", error);
    process.exit(1);
  }
};
