import { Request, Response, Router } from "express";
import * as TaskController from "../controllers/taskController";

const router = Router();

router.get("/", TaskController.showTask);

router.post("/", TaskController.createTask);

router.delete("/:id", TaskController.deleteTask);

router.put("/:id", TaskController.checkTask);

export default router;
