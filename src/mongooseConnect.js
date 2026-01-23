import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export async function connectMongoose(uri) {
  const mongoUri = uri || process.env.MONGO_URI;

  if (!mongoUri) {
    throw new Error("❌ MONGO_URI not found for mongoose connection");
  }

  if (mongoose.connection.readyState === 1) {
    console.log("ℹ️ Mongoose already connected");
    return mongoose;
  }

  try {
    console.log("🔄 Connecting to MongoDB (Mongoose)...");
    await mongoose.connect(mongoUri);
    console.log("✅ MongoDB connected via Mongoose");
    return mongoose;
  } catch (err) {
    console.error("❌ Mongoose connection failed");
    throw err;
  }
}

// 🔥 IMPORTANT: export SAME mongoose instance
export { mongoose };
