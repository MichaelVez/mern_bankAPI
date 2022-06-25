import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  passportID: { type: Number, required: true },
  cash: { type: Number, required: true },
  credit: { type: Number, required: true },
});

const User = mongoose.model("users", userSchema);

export { User };
