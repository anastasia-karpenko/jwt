import { client } from "./db.js";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();

app.use(express.json());

app.use(cors({
    origin: "http://127.0.0.1:5500"
}));


app.post("/auth/register", async (req, res) => {

});


app.post("/auth/login", async (req, res) => {

});


app.get("/profile", async (req, res) => {

});

app.get("/admin", (req, res) => {

});


app.listen(3000, () => {
    console.log("Сервер запущен...");
});
