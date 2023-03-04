import Repository from "../repositories/TarefaRepository.js";

class TarefaController{
    static async listar(req, res){
        try {
            let tarefas = await Repository.listar();
            res.status(200).json(tarefas);
        } catch (error) {
            res.status(500).json({msg: error.message});
        }
    }

    static async buscarPorId(req, res){
        try {
            let {id} = req.params;
            let tarefa = await Repository.buscarPorId(id);
            res.status(200).json(tarefa);
        } catch (error) {
            res.status(500).json({msg: error.message});
        }
    }

    static async criar(req, res){
        try {
            let tarefa = await Repository.criar(req.body);
            res.status(201).json(tarefa);
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

export default TarefaController;