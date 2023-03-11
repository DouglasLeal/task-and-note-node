import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import Repository from "../repositories/UsuarioRepository.js";

class UsuarioController {
    static async listar(req, res) {
        try {
            let usuarios = await Repository.listar();
            res.status(200).json(usuarios);
        } catch (error) {
            res.status(500).json({ msg: error.message });
        }
    }

    static async buscarPorId(req, res) {
        try {
            let { id } = req.params;
            let usuario = await Repository.buscarPorId(id);
            res.status(200).json(usuario);
        } catch (error) {
            res.status(500).json({ msg: error.message });
        }
    }

    static async criar(req, res) {
        try {
            let usuarioCadastrado = await Repository.buscarPorEmail(req.body.email);

            if (usuarioCadastrado) {
                return res.status(400).json({ msg: "E-mail já cadastrado." });
            }

            req.body.senha = bcrypt.hashSync(req.body.senha);

            let usuario = await Repository.criar(req.body);

            res.status(201).json(usuario);
        } catch (error) {
            res.status(500).json({ msg: error.message });
        }
    }

    static async atualizar(req, res) {
        try {
            let { id } = req.params;
            await Repository.atualizar(id, req.body);
            res.status(204).json();
        } catch (error) {
            res.status(500).json({ msg: error.message });
        }
    }

    static async excluir(req, res) {
        try {
            let { id } = req.params;
            await Repository.excluir(id);
            res.status(204).json();
        } catch (error) {
            res.status(500).json({ msg: error.message });
        }
    }

    static async login(req, res) {
        let { email, senha } = req.body;

        let usuarioCadastrado = await Repository.buscarPorEmail(email);

        if (!usuarioCadastrado) return res.status(400).json({ msg: "E-mail não encontrado." });

        let senhaCorreta = bcrypt.compareSync(senha, usuarioCadastrado.senha);

        if(!senhaCorreta) return res.status(400).json({ msg: "Senha incorreta." });

        const token = jwt.sign({
            id: usuarioCadastrado._id,
            email: usuarioCadastrado.email
        },
            process.env.SECRET,
            {expiresIn: "7d"}
        );

        res.header('token', token);

        res.status(200).json({ msg: "Login realizado com sucesso." });
    }
}

export default UsuarioController;