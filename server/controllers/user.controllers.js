import { User } from "../models/User.model.js";

export const getAll = async (req, res) => {
  console.log("here");
  try {
    const users = await User.find();
    res.status(200);
    // .send({ data: users });
    res.json(users);
  } catch (error) {}
};
export const newUser = async (req, res) => {
  console.log("here");
  const userToSave = req.body;
  console.log(userToSave);
  try {
    const newUser = new User(userToSave);
    const saveUser = await newUser.save();
    res.status(200).send({ data: saveUser });
  } catch (error) {
    res.status(400).send("error " + error.message);
  }
};
export const getID = async (req, res) => {
  try {
    const userToSave = req.body;
  } catch (error) {
    res.status(400).send("error " + error.message);
  }
};
export const withdraw = async (req, res) => {
  try {
    const userToSave = req.body;
  } catch (error) {
    res.status(400).send("error " + error.message);
  }
};
export const deposit = async (req, res) => {
  try {
    const userToSave = req.body;
  } catch (error) {
    res.status(400).send("error " + error.message);
  }
};
