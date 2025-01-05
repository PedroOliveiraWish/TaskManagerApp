import express from "express";
import taskController from "../controllers/taskController.js";

const router = express.Router();

router.get("/", taskController.getAllTasksController);
router.post("/", taskController.createTaskController);
router.put("/:id", taskController.updateTaskController);
router.delete("/:id", taskController.deleteTaskController);

export default router;
