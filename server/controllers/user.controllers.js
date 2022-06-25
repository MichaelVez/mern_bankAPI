import { User } from "../models/User.model.js";

export const getAll = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200);
    // .send({ data: users });
    res.json(users);
  } catch (error) {}
};
