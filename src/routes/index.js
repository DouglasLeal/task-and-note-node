import express from "express";

import tarefas from "./tarefasRoutes.js";

const routes = (app) => {
    app.route("/").get((req, res) => {
        res.status(200).json({hello: "world"});
    });

    app.use(express.json());
    app.use("/tarefas", tarefas);
}

export default routes;