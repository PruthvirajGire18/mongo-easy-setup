import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

let client;

export async function connectMongo(options = {}) {
  const uri = options.uri || process.env.MONGO_URI;

  if (!uri) {
    throw new Error(
      "❌ MONGO_URI not found. Please add it to your .env file"
    );
  }

  try {
    console.log("🔄 Connecting to MongoDB...");
    client = new MongoClient(uri);
    await client.connect();
    console.log("✅ MongoDB connected successfully");

    process.on("SIGINT", closeMongo);
    process.on("SIGTERM", closeMongo);

    return client;
  } catch (err) {
    console.error("❌ MongoDB connection failed");
    throw err;
  }
}

export async function closeMongo() {
  if (client) {
    await client.close();
    console.log("🔌 MongoDB connection closed");
  }
}
