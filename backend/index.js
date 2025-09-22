const express = require('express');
const app = express();
const cors = require('cors');
const usuarioRouter = require('./src/routes/usuario');

app.use(cors());
app.use(express.json());
app.use(usuarioRouter);

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});