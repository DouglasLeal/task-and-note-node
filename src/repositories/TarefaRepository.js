import Tarefa from "../models/Tarefa.js";

class TarefaRepository{
    static async listar(){
        let tarefas = await Tarefa.find();
        return tarefas;
    }

    static async buscarPorId(id){
        let tarefa = await Tarefa.findById(id);
        return tarefa;
    }

    static async criar(dados){
        let novaTarefa = new Tarefa(dados);
        return await novaTarefa.save();
    }

    static async atualizar(id, dados){
        return await Tarefa.findByIdAndUpdate(id, dados);
    }

    static async excluir(id){
        return await Tarefa.findByIdAndDelete(id);
    }
}

export default TarefaRepository;