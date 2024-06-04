import mongoose from "mongoose";
const { Schema, model, SchemaTypes } = mongoose;

const linkSchema = new Schema({
  name: { type: String },
  link: { type: String, required: [true, "Please enter a link"] },
  category: { type: String, default: "others" },
  author: {
    type: SchemaTypes.ObjectId,
    ref: "User",
  },
});

const Link = model("Link", linkSchema);
export default Link;
