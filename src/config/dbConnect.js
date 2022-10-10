import mongoose from "mongoose";

mongoose.connect(
  "mongodb+srv://douglastenfen:romaGDs2@cluster0.l8eriiq.mongodb.net/alura-node?"
);

let db = mongoose.connection;

export default db;
