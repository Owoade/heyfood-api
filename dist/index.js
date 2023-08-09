"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = require("dotenv");
const mongoose_1 = __importDefault(require("mongoose"));
const route_1 = __importDefault(require("./services/resturants/route"));
(0, dotenv_1.config)();
const app = (0, express_1.default)();
app.use(express_1.default.urlencoded({ extended: false, limit: "50mb" }));
app.use(express_1.default.json({ limit: "50mb" }));
app.use("/resturant", route_1.default);
const PORT = process.env.PORT ?? 5000;
const MONGO_DB_URL = process.env.MONGO_DB_URL;
mongoose_1.default.connect(MONGO_DB_URL)
    .then(() => app.listen(PORT, () => console.log("The server is running fine and good")));
