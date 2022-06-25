import express from "express";
const userRouter = express.Router();
import { getAll } from "../controllers/user.controllers.js";

userRouter.get("/getAll", getAll);

export { userRouter };
