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
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
const taskRoutes_1 = __importDefault(require("./routes/taskRoutes"));
const cors_1 = __importDefault(require("cors"));
dotenv_1.default.config();
//
const app = (0, express_1.default)();
const PORT = 4000;
app.use(express_1.default.json());
const corsOptions = {
    origin: ["http://localhost:5173", "https://tasklist-app-wkma.onrender.com"]
};
app.use((0, cors_1.default)(corsOptions));
//connect database
const connectDB = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield mongoose_1.default.connect("mongodb+srv://jonasnb4:jonaslll@cluster0.afrbkuj.mongodb.net/", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("BD mongo success");
    }
    catch (error) {
        console.log(error);
    }
});
app.use("/api/tasks", taskRoutes_1.default);
connectDB();
//VERIFICANDO CONEXÃO COM O BANCO
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
