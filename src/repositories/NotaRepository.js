import Nota from "../models/Nota.js";

class NotaRepository{
    static async listar(){
        let notas = await Nota.find();
        return notas;
    }

    static async buscarPorId(id){
        let nota = await Nota.findById(id);
        return nota;
    }

    static async criar(dados){
        let novaNota = new Nota(dados);
        return await novaNota.save();
    }

    static async atualizar(id, dados){
        return await Nota.findByIdAndUpdate(id, dados);
    }

    static async excluir(id){
        return await Nota.findByIdAndDelete(id);
    }
}

export default NotaRepository;