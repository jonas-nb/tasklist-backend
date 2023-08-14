import express from "express";
import mongoose, { ConnectOptions } from "mongoose";
import dotenv from "dotenv";
import taskRoutes from "./routes/taskRoutes";
import cors from "cors";

dotenv.config();

//
const app = express();
const PORT = 4000;
app.use(express.json());
const corsOptions = {
  origin: ["https://tasklist-app-sic7.onrender.com"] 
};

app.use(cors(corsOptions));
//connect database

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/todo", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as ConnectOptions);
    console.log("BD mongo success");
  } catch (error: any) {
    console.log(error);
  }
};

app.use("/api/tasks", taskRoutes);

connectDB();

//VERIFICANDO CONEXÃO COM O BANCO

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
