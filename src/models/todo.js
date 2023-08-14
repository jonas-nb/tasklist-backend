"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const taskSchema = new mongoose_1.Schema({
    task: { type: String, required: true },
    check: { type: Boolean, required: true },
});
const TaskUser = (0, mongoose_1.model)("items", taskSchema);
exports.default = TaskUser;
