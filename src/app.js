import express from "express";

import db from "./config/dbConnect.js";

db.on("error", console.log.bind(console, "DB - Erro ao conectar."))
db.once("open", () => {
    console.log("DB - Conectado com sucesso.");
});

const app = express();

app.get("/", (req, res) => {
    res.status(200).json({ hello: "world" });
});

export default app;