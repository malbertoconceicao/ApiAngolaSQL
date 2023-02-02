const database = require('../models/index.js')

class UsuarioController {

  static async listarUsuarios (req,res) {
    try {
          const listar = await database.Usuario.findAll()
          return res.status(200).json(listar)
        } catch (error) {
          res.status(500).send(error.message);
        }
  }
  static async usuariosPorId (req,res){
    const {id} = req.params;
    try {
      const usuarioId = await database.Usuario.findOne({
        where : {
          id: Number(id)
        }
      })
      return res.status(200).json(usuarioId);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
static async criarUsuario (req,res){
  try{
    const usuario = req.body;
  const criarUsuario = await database.Usuario.create(usuario)
  res.status(201).json(criarUsuario);
  } catch (error) {
    res.status(500).send(error.message);
  }
}
static async atualizaUsuario (req,res) {
  const {id} = req.params;
  const novasInfos = req.body
  try 
  {
    await database.Usuario.update(novasInfos, {
      where: {
        id: Number(id)
      }
    })
    const usuarioAtualizado = await database.Usuario.findOne({
      where: {
        id:Number(id)
      }
    })
    res.status(200).json(usuarioAtualizado)
  }
    catch (error) {
      res.status(500).send(error.message);
    }
}
static async deletaUsuario (req,res) {
  const {id} = req.params;
  try{
    await database.Usuario.destroy({
      where: {
        id:Number(id)
      }
    })
    res.status(200).send(`Usuário id:${id} foi excluido com sucesso!`)
  }catch (error){
    res.status(500).send(error.message);
  }
}
}
module.exports = UsuarioController;