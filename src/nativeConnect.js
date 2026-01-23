import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

let client = null;

export async function connectNative(uri) {
  const mongoUri = uri || process.env.MONGO_URI;

  if (!mongoUri) {
    throw new Error("❌ MONGO_URI not found for native MongoDB connection");
  }

  if (client) {
    console.log("ℹ️ Native MongoDB already connected");
    return client;
  }

  console.log("🔄 Connecting to MongoDB (Native Driver)...");
  client = new MongoClient(mongoUri);
  await client.connect();
  console.log("✅ MongoDB connected via Native Driver");

  process.on("SIGINT", closeNative);
  process.on("SIGTERM", closeNative);

  return client;
}

export async function closeNative() {
  if (client) {
    await client.close();
    client = null;
    console.log("🔌 Native MongoDB connection closed");
  }
}
