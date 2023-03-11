import express from "express";

import Controller from "../controllers/TarefaController.js";
import validation from "../validations/tarefaValidation.js";

const router = express.Router();

router
    .get("/", Controller.listar)
    .get("/:id", Controller.buscarPorId)
    .post("/", validation, Controller.criar)
    .put("/:id", validation, Controller.atualizar)
    .delete("/:id", Controller.excluir);

export default router;