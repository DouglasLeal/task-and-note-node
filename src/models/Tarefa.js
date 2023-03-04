import mongoose from "mongoose";

const tarefaSchema = new mongoose.Schema({
    conteudo: {
        type: String,
        trim: true,
        required: "O campo conteúdo é obrigatório."
    },
    concluido: {
        type: Boolean,
        default: false
    }
});

const Tarefa = mongoose.model("tarefas", tarefaSchema);

export default Tarefa;