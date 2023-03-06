import Repository from "../repositories/CategoriaRepository.js";

class CategoriaController{
    static async listar(req, res){
        try {
            let categorias = await Repository.listar();
            res.status(200).json(categorias);
        } catch (error) {
            res.status(500).json({msg: error.message});
        }
    }

    static async buscarPorId(req, res){
        try {
            let {id} = req.params;
            let categoria = await Repository.buscarPorId(id);
            res.status(200).json(categoria);
        } catch (error) {
            res.status(500).json({msg: error.message});
        }
    }

    static async criar(req, res){
        try {
            let categoria = await Repository.criar(req.body);
            res.status(201).json(categoria);
        } catch (error) {
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

export default CategoriaController;