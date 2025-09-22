const express = require('express');
const app = express();
const usuarioRouter = require('./routes/usuario');

app.use(express.json());
app.use(usuarioRouter);

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});