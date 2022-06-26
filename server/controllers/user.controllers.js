import { User } from "../models/User.model.js";

export const getAll = async (req, res) => {
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
  const userId = req.params;
  console.log(userId.id);
  try {
    const users = await User.findById(userId.id);
    res.status(200);
    res.json(users);
  } catch (error) {
    res.status(400).send("error " + error.message);
  }
};
export const withdraw = async (req, res) => {
  try {
    const moneyAmount = req.body.withdraw;
    console.log(moneyAmount);
    const userID = req.body._id;
    const userInst = await User.findById(userID);
    userInst.cash = parseInt(userInst.cash) - parseInt(moneyAmount);
    const newUserInst = await User.findByIdAndUpdate(userID, userInst);
    res.status(200);
    res.send(newUserInst);
  } catch (error) {
    res.status(400).send("error " + error.message);
  }
};
export const deposit = async (req, res) => {
  try {
    const moneyAmount = req.body.deposit;
    const userID = req.body._id;
    const userInst = await User.findById(userID);
    userInst.cash = parseInt(userInst.cash) + parseInt(moneyAmount);
    const newUserInst = await User.findByIdAndUpdate(userID, userInst);
    console.log(userInst);
    res.status(200);
    res.send(newUserInst);
  } catch (error) {
    res.status(400).send("error " + error.message);
  }
};
export const deleteUser = async (req, res) => {
  try {
    const newUserInst = await User.findByIdAndDelete(req.params.id);
    res.status(200);
    res.send(newUserInst);
  } catch (error) {
    res.status(400).send("error " + error.message);
  }
};
