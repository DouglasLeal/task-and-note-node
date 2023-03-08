import Repository from "../repositories/NotaRepository.js";

class NotaController{
    static async listar(req, res){
        try {
            let notas = await Repository.listar();
            res.status(200).json(notas);
        } catch (error) {
            res.status(500).json({msg: error.message});
        }
    }

    static async buscarPorId(req, res){
        try {
            let {id} = req.params;
            let nota = await Repository.buscarPorId(id);
            res.status(200).json(nota);
        } catch (error) {
            res.status(500).json({msg: error.message});
        }
    }

    static async criar(req, res){
        try {
            let nota = await Repository.criar(req.body);
            res.status(201).json(nota);
        } catch (error) {
            console.log(error)
            res.status(500).json({msg: error.message});
        }
    }

    static async atualizar(req, res){
        try {
            let {id} = req.params;
            await Repository.atualizar(id, req.body);
            res.status(204).json();
        } catch (error) {
            res.status(500).json({msg: error.message});
        }
    }

    static async excluir(req, res){
        try {
            let {id} = req.params;
            await Repository.excluir(id);
            res.status(204).json();
        } catch (error) {
            res.status(500).json({msg: error.message});
        }
    }
}

export default NotaController;