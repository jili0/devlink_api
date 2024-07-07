import e from "express";
import {
  getAllNotes,
  getNote,
  addNote,
  updateNote,
  deleteNote,
} from "../controllers/note.controller.js";

const router = e.Router();

router.get("/", getAllNotes);

router.get("/:id", getNote);

router.post("/", addNote);

router.put("/:id", updateNote); 

router.delete("/:id", deleteNote);

export default router;


