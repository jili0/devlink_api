import e from "express";
import {
  getAllLinks,
  getLink,
  addLink,
  updateLink,
  deleteLink,
} from "../controllers/link.controller.js";

const router = e.Router();

router.get("/", getAllLinks);

router.get("/:id", getLink);

router.post("/", addLink);

router.put("/:id", updateLink); 

router.delete("/:id", deleteLink);

export default router;

