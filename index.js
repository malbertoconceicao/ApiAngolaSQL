const express = require('express');
const routes = require('./app/routes/index.js');
const app = express();
const port = 3000;
routes(app);
app.listen(port,() => {
  console.log(`Servidor : http://localhost:${port}`)
})
module.exports = (app);