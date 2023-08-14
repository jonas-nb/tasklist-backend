import { Response, Request } from "express";
import TaskUser from "../models/todo";

export const createTask = async (req: Request, res: Response) => {
  const { task } = req.body;

  if (!task) {
    return res.status(400).json({ error: "O campo task é obrigatório." });
  }

  try {
    const newTask = new TaskUser({ task, check: false });
    await newTask.save();
    res.status(201).json(newTask);
  } catch (err) {
    res.status(500).json({ error: "Erro ao criar a tarefa." });
  }
};

export const showTask = async (req: Request, res: Response) => {
  try {
    const showTasks = await TaskUser.find();
    res.status(200).json(showTasks);
  } catch (error) {
    res.status(400).json(error);
  }
};

export const deleteTask = async (req: Request, res: Response) => {
  try {
    const _id = req.params.id;

    const TaskDelete = await TaskUser.findByIdAndDelete({ _id });

    res.json("tarefa deletada");
  } catch (error) {
    console.log(`Erro ao deletar: ${error}`);

    res.status(500).json({ error: "Erro ao deletar a tarefa" });
  }
};

export const checkTask = async (req: Request, res: Response) => {
  try {
    const _id = req.params.id;
    const checkState = req.body.check;

    const updateTask = await TaskUser.findByIdAndUpdate(
      _id,
      { check: checkState },
      { new: true }
    );

    res.json("atualizado");
  } catch (error) {
    res.json(`Erro de req: ${error}`);
  }
};
