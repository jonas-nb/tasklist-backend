"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkTask = exports.deleteTask = exports.showTask = exports.createTask = void 0;
const todo_1 = __importDefault(require("../models/todo"));
const createTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { task } = req.body;
    if (!task) {
        return res.status(400).json({ error: "O campo task é obrigatório." });
    }
    try {
        const newTask = new todo_1.default({ task, check: false });
        yield newTask.save();
        res.status(201).json(newTask);
    }
    catch (err) {
        res.status(500).json({ error: "Erro ao criar a tarefa." });
    }
});
exports.createTask = createTask;
const showTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const showTasks = yield todo_1.default.find();
        res.status(200).json(showTasks);
    }
    catch (error) {
        res.status(400).json(error);
    }
});
exports.showTask = showTask;
const deleteTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const _id = req.params.id;
        const TaskDelete = yield todo_1.default.findByIdAndDelete({ _id });
        res.json("tarefa deletada");
    }
    catch (error) {
        console.log(`Erro ao deletar: ${error}`);
        res.status(500).json({ error: "Erro ao deletar a tarefa" });
    }
});
exports.deleteTask = deleteTask;
const checkTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const _id = req.params.id;
        const checkState = req.body.check;
        const updateTask = yield todo_1.default.findByIdAndUpdate(_id, { check: checkState }, { new: true });
        res.json("atualizado");
    }
    catch (error) {
        res.json(`Erro de req: ${error}`);
    }
});
exports.checkTask = checkTask;
