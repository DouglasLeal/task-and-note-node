import Usuario from "../models/Usuario.js";

class UsuarioRepository{
    static async listar(){
        let usuarios = await Usuario.find();
        return usuarios;
    }

    static async buscarPorId(id){
        let usuario = await Usuario.findById(id);
        return usuario;
    }

    static async criar(dados){
        let novoUsuario = new Usuario(dados);
        return await novoUsuario.save();
    }

    static async atualizar(id, dados){
        return await Usuario.findByIdAndUpdate(id, dados);
    }

    static async excluir(id){
        return await Usuario.findByIdAndDelete(id);
    }
}

export default UsuarioRepository;