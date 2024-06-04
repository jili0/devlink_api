import mongoose from "mongoose";
const { Schema, model, SchemaTypes } = mongoose;

const noteSchema = new Schema({
  category: { type: String, default: "Others" },
  content: { type: String, required: [true, "Please enter a note"] },
  author: {
    type: SchemaTypes.ObjectId,
    ref: "User",
    required: true,
  },
});

const Note = model("Note", noteSchema);
export default Note;
