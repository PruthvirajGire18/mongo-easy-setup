# mongo-easy-setup

Zero-config MongoDB setup for Node.js applications.

## Installation
npm install mongo-easy-setup

## Usage
Create a `.env` file:
MONGO_URI=mongodb://localhost:27017/myapp

```js
import { connectMongo } from "mongo-easy-setup";
await connectMongo();
