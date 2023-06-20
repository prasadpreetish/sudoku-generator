import express from "express";
import dotenv from "dotenv";
import cors from "cors";

const app = express();



app.use(cors({ origin: '*' }));

export default app;

dotenv.config({
    path:"./config/config.env"
});