const {Router} = require('express');
const router = Router();
const UsuarioController = require('../controller/UsuarioController.js')

router.get('/usuarios', UsuarioController.listarUsuarios)
router.post('/usuarios', UsuarioController.criarUsuario)
router.get('/usuarios/:id', UsuarioController.usuariosPorId)
router.put('/usuarios/:id', UsuarioController.atualizaUsuario)
router.delete('/usuarios/:id', UsuarioController.deletaUsuario)

module.exports = router;