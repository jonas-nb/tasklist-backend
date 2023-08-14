import mongoose, { Schema, model } from "mongoose";

type TaksType = {
  task: string;
  check: boolean;
};

const taskSchema = new Schema<TaksType>({
  task: { type: String, required: true },
  check: { type: Boolean, required: true },
});

const TaskUser = model<TaksType>("items", taskSchema);

export default TaskUser;
