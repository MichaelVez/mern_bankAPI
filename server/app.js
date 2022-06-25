import express from "express";
import { userRouter } from "./routes/Users.js";
const app = express();
import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";
// import cors from "cors";
const __dirname = dirname(fileURLToPath(import.meta.url));
const test = path.resolve(__dirname, "../client/build");
console.log(test);
console.log(__dirname);
app.use(express.json());

app.use(express.urlencoded({ extended: true }));
// app.use(cors);
app.use(express.static(path.resolve(__dirname, "../client/build")));

app.use("/user", userRouter);
app.get("/*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/build/index.html"));
});
export { app };
