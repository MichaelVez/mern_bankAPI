import express from "express";
const userRouter = express.Router();
import {
  getAll,
  newUser,
  getID,
  withdraw,
  deposit,
} from "../controllers/user.controllers.js";

userRouter.get("/getAll", getAll);
userRouter.post("/newUser", newUser);
userRouter.get("/getID/:id", getID);
userRouter.put("/withdraw", withdraw);
userRouter.put("/deposit", deposit);
export { userRouter };
