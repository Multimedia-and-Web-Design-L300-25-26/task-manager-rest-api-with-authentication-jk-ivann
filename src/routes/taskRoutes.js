import express from "express";
import protect from "../middleware/authMiddleware.js";
import { createTask, getTasks, deleteTask } from "../controllers/taskController.js";

const router = express.Router();

router.route("/").post(protect, createTask).get(protect, getTasks);
router.route("/:id").delete(protect, deleteTask);

export default router;