import mongoose from "mongoose";

const notaSchema = new mongoose.Schema({
    titulo: {
        type: String,
        trim: true,
        required: "O campo título é obrigatório."
    },
    conteudo: {
        type: String,
        trim: true,
        required: "O campo conteúdo é obrigatório."
    },
    cor: {
        type: String,
        trim: true,
        required: "O campo cor é obrigatório."
    },
    categoria:{
        type:  mongoose.Schema.Types.ObjectId,
        ref:"categorias",
        required: "O produto precisa de uma categoria."
    }
});

const Nota = mongoose.model("notas", notaSchema);

export default Nota;