# mongo-easy-setup 🚀

Zero-config MongoDB setup for Node.js & MERN applications.

> Stop writing MongoDB boilerplate. Connect with one line.

⭐ If this project helps you, please star the repo!

## Why mongo-easy-setup?

### ❌ Without this library
- Manual MongoClient setup
- Repeated env validation
- Boilerplate in every project

### ✅ With mongo-easy-setup
```js
await connectMongo();


## Installation
npm install mongo-easy-setup

## Usage
Create a `.env` file:
MONGO_URI=mongodb://localhost:27017/myapp

```js
import { connectMongo } from "mongo-easy-setup";
await connectMongo();
