import express from "express";

import Controller from "../controllers/UsuarioController.js";
import validation from "../validations/usuarioValidation.js";

const router = express.Router();

router
    .get("/", Controller.listar)
    .post("/registrar", validation, Controller.criar)
    .post("/login", validation, Controller.login)

export default router;