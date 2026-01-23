![npm](https://img.shields.io/npm/v/mongo-easy-setup)
![downloads](https://img.shields.io/npm/dw/mongo-easy-setup)
![license](https://img.shields.io/npm/l/mongo-easy-setup)

# mongo-easy-setup 🚀

**Zero-config MongoDB connection utility for Node.js & MERN applications.**

> Stop writing MongoDB boilerplate.  
> Connect MongoDB with **one line of code**.

⭐ If this package helps you, please **star the repo** to support the project!

---

## 🤔 The Problem

Every time we start a Node.js or MERN project, we write the **same MongoDB connection code again and again**.

### ❌ Before (Without this package)

```js
import mongoose from "mongoose";

const connectDB = async () => {
  try {
    if (!process.env.MONGO_URI) {
      throw new Error("MONGO_URI not defined");
    }

    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection failed", error);
    process.exit(1);
  }
};

export default connectDB;
Problems
Same boilerplate in every project

Manual environment variable checks

Extra files & repeated logic

Easy to mess up in new projects

✅ The Solution – mongo-easy-setup
await connectMongo();
That’s it.
No boilerplate. No repeated setup.

✨ What this package does
✔️ Handles MongoDB connection
✔️ Automatically validates MONGO_URI
✔️ Prevents multiple connections
✔️ Clean error handling
✔️ Works with MongoDB Native Driver & Mongoose
✔️ Perfect for Node.js, Express & MERN projects

📦 Installation
npm install mongo-easy-setup
⚙️ Environment Setup
Create a .env file in your project root:

Local MongoDB
MONGO_URI=mongodb://127.0.0.1:27017/myapp
MongoDB Atlas
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/myapp
🚀 Usage
1️⃣ MongoDB Native Driver (Default)
Use this if you want to work directly with collections.

import { connectMongo } from "mongo-easy-setup";

const client = await connectMongo({ type: "native" });
const db = client.db("myapp");

const users = await db.collection("users").find().toArray();
2️⃣ Mongoose / MERN Stack
Use this for schemas, models and ODM features.

import { connectMongo, mongoose } from "mongo-easy-setup";

await connectMongo({ type: "mongoose" });

const UserSchema = new mongoose.Schema({
  name: String,
  email: String
});

const User = mongoose.model("User", UserSchema);
⚠️ Important Rules
❌ Do NOT mix Native MongoDB and Mongoose in the same project

❌ Do NOT call both connection types together

👉 Choose one connection type per application.

🧩 Example (Express App)
import express from "express";
import { connectMongo } from "mongo-easy-setup";

const app = express();

await connectMongo({ type: "mongoose" });

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
🧠 API Reference
connectMongo(options)
connectMongo({
  type: "native" | "mongoose", // default: native
  uri: "mongodb://..."         // optional (uses process.env.MONGO_URI)
});
🧹 Close Native Connection (Optional)
import { closeNative } from "mongo-easy-setup";

await closeNative();
🛠️ Requirements
Node.js >= 16

MongoDB (Local or Atlas)

📄 License
MIT License

🙌 Support
If you find this useful:

⭐ Star the repository
🐛 Report issues
🔧 Contribute improvements

Built with ❤️ for developers who hate boilerplate.
