import mongoose from "mongoose";
const { Schema, model } = mongoose;

const userSchema = new Schema({
  name: { type: String, required: [true, "Please enter a name"] },
  email: { type: String, minLength: 10, required: [true, "Please enter an email address"], lowercase: true },
  loggedIn: { type: Boolean, default: false },
});

const User = model("User", userSchema);

export default User;
