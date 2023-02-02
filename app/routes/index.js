const usuarios = require('./usuariosRoutes')
const bodyParser = require('body-parser')
module.exports = app => {
  app.use(bodyParser.json());
  app.get('/', (req,res) => {res.status(200).send('Página Inicial');})
  app.use(usuarios);
}