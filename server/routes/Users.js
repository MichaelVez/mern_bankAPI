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
userRouter.get("/getID/:id", getID);
userRouter.put("/withdraw", withdraw);
userRouter.put("/deposit", deposit);
userRouter.post("/newUser", newUser);
export { userRouter };
