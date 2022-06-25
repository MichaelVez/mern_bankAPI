import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  age: { type: Number, required: true },
});

const User = mongoose.model("users", userSchema);

export { User };
