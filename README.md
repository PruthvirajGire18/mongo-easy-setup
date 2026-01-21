![npm](https://img.shields.io/npm/v/mongo-easy-setup)
![downloads](https://img.shields.io/npm/dw/mongo-easy-setup)
![license](https://img.shields.io/npm/l/mongo-easy-setup)

# mongo-easy-setup 🚀

**Zero-config MongoDB connection for Node.js & MERN applications.**

> Stop writing MongoDB boilerplate.  
> Connect MongoDB with **one line of code**.

⭐ If this package helps you, please **star the repo** to support the project!

---

## 🤔 The Problem

Every time we start a Node.js / MERN project, we write the **same MongoDB connection code again and again**.

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
Problems:

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
✔️ Clean error handling
✔️ Works with local MongoDB & MongoDB Atlas
✔️ Perfect for Node.js, Express & MERN projects

📦 Installation
npm install mongo-easy-setup
⚙️ Usage (Step-by-Step)
1️⃣ Create a .env file
Local MongoDB

MONGO_URI=mongodb://localhost:27017/myapp
MongoDB Atlas

MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/myapp
2️⃣ Connect MongoDB (One line)
import { connectMongo } from "mongo-easy-setup";

await connectMongo();
✅ MongoDB connected
✅ Ready to use models

🧩 Example (Express App)
import express from "express";
import { connectMongo } from "mongo-easy-setup";

const app = express();

await connectMongo();

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
🛠️ Requirements
Node.js >= 16

MongoDB (local or Atlas)

📄 License
MIT License

🙌 Support
If you find this useful:

⭐ Star the repository

🐛 Report issues

🔧 Contribute improvements

Built with ❤️ for developers who hate boilerplate
