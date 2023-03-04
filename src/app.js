import express from "express";

import db from "./config/dbConnect.js";
import routes from "./routes/index.js";

db.on("error", console.log.bind(console, "DB - Erro ao conectar."))
db.once("open", () => {
    console.log("DB - Conectado com sucesso.");
});

const app = express();

routes(app);

export default app;