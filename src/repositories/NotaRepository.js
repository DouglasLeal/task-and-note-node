import Nota from "../models/Nota.js";

class NotaRepository{
    static async listar(){
        let notas = await Nota.find().populate("categoria");
        return notas;
    }

    static async buscarPorId(id){
        let nota = await Nota.findById(id).populate("categoria");
        return nota;
    }

    static async criar(dados){
        let novaNota = new Nota({
            titulo: dados.titulo,
            cor: dados.cor,
            conteudo: dados.conteudo,
            categoria: dados.categoria?._id
        });
        return await novaNota.save();
    }

    static async atualizar(id, dados){
        return await Nota.findByIdAndUpdate(id, {
            titulo: dados.titulo,
            cor: dados.cor,
            conteudo: dados.conteudo,
            categoria: dados.categoria?._id
        });
    }

    static async excluir(id){
        return await Nota.findByIdAndDelete(id);
    }
}

export default NotaRepository;