import { connectNative, closeNative } from "./nativeConnect.js";
import { connectMongoose, mongoose } from "./mongooseConnect.js";

export async function connectMongo(options = {}) {
  const { type = "native", uri } = options;

  if (type === "native") {
    return connectNative(uri);
  }

  if (type === "mongoose") {
    return connectMongoose(uri);
  }

  throw new Error(
    "❌ Invalid type. Use connectMongo({ type: 'native' }) or connectMongo({ type: 'mongoose' })"
  );
}

export { mongoose, closeNative };
