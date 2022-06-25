import mongoose from "mongoose";
import { app } from "./app.js";
import dotenv from "dotenv";
dotenv.config();
const URL = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.cdkzy.mongodb.net/bankAPI?retryWrites=true&w=majority`;

mongoose.connect(URL, (error, mongoDBInstance) => {
  if (error) {
    console.log(error.message);
    throw error;
  }
  if (!process.env.NODE_ENV || !process.env.NODE_ENV === "development") {
    const { host, port, name } = mongoDBInstance;
    console.log({ host, port, name });
  }
});

const PORT = process.env.PORT || 5050;
app.listen(PORT, () => {
  console.log("listen on port " + PORT);
});
