import express from "express";

import Controller from "../controllers/UsuarioController.js";

const router = express.Router();

router
    .get("/", Controller.listar)
    .post("/registrar", Controller.criar)
    .post("/login", Controller.login)

export default router;