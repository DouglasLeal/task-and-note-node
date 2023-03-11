import express from "express";

import tarefas from "./tarefasRoutes.js";
import categorias from "./categoriasRoutes.js";
import notas from "./notasRoutes.js";
import usuarios from "./usuariosRoutes.js";
import Auth from "../middlewares/AuthMiddleware.js";

const routes = (app) => {
    app.route("/").get((req, res) => {
        res.status(200).json({hello: "world"});
    });

    app.use(express.json());
    app.use("/categorias", Auth.autenticar, categorias);
    app.use("/tarefas", Auth.autenticar, tarefas);
    app.use("/notas", Auth.autenticar, notas);
    app.use("/usuarios", usuarios);
}

export default routes;