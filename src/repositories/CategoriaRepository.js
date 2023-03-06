import Categoria from "../models/Categoria.js";

class CategoriaRepository{
    static async listar(){
        let categorias = await Categoria.find();
        return categorias;
    }

    static async buscarPorId(id){
        let categoria = await Categoria.findById(id);
        return categoria;
    }

    static async criar(dados){
        let novaCategoria = new Categoria(dados);
        return await novaCategoria.save();
    }

    static async atualizar(id, dados){
        return await Categoria.findByIdAndUpdate(id, dados);
    }

    static async excluir(id){
        return await Categoria.findByIdAndDelete(id);
    }
}

export default CategoriaRepository;