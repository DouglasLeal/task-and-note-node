import express from "express";

import tarefas from "./tarefasRoutes.js";
import categorias from "./categoriasRoutes.js";
import notas from "./notasRoutes.js";

const routes = (app) => {
    app.route("/").get((req, res) => {
        res.status(200).json({hello: "world"});
    });

    app.use(express.json());
    app.use("/categorias", categorias);
    app.use("/tarefas", tarefas);
    app.use("/notas", notas);
}

export default routes;