import mongoose from "mongoose";
import dotenv from "dotenv/config";

mongoose.connect(
  `mongodb+srv://${process.env.DB_NAME}:${process.env.DB_PASS}@cluster0.l8eriiq.mongodb.net/alura-node?`
);

let db = mongoose.connection;

export default db;
