import express, { Request, Response } from "express";

import { config } from "dotenv"
import mongoose from "mongoose";
import resturant_router from "./services/resturants/route";
import Store, { Tag } from "./services/resturants/model";

config();

const app = express()

app.use(express.urlencoded({ extended: false, limit: "50mb"  }));
app.use(express.json({limit: "50mb"}));

app.use("/resturant", resturant_router)

const PORT = process.env.PORT ?? 5000;

const MONGO_DB_URL = process.env.MONGO_DB_URL;


mongoose.connect(MONGO_DB_URL as string)
.then(()=> app.listen(PORT, ()=> console.log("The server is running fine and good")))


