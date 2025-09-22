const express = require('express');
const router = express.Router();
const db = require('../../../database/init');
const bcrypt = require('bcrypt');
const { v4: uuid } = require('uuid');

// Regex para senha forte: mínimo 8 caracteres, 1 maiúscula, 1 minúscula, 1 número
const regexSenha = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

router.post('/api/usuarios', async (req, res) => {
  const { nomeCompleto, email, curso, periodo, senha } = req.body;

  // Validações básicas
  if (!nomeCompleto || !email || !curso || !periodo || !senha) {
    return res.status(400).json({ message: 'Todos os campos são obrigatórios.' });
  }
  if (nomeCompleto.length > 200 || email.length > 150 || curso.length > 100) {
    return res.status(400).json({ message: 'Um ou mais campos excedem o tamanho máximo.' });
  }
  if (!email.endsWith('@university.edu')) {
    return res.status(400).json({ message: 'O e-mail precisa ser institucional (@university.edu).' });
  }
  if (!regexSenha.test(senha)) {
    return res.status(400).json({
      message: 'A senha deve ter no mínimo 8 caracteres, incluindo letra maiúscula, minúscula e número.'
    });
  }

  try {
    const senhaHash = await bcrypt.hash(senha, 10);
    const id = uuid();

    db.run(
      `INSERT INTO Usuario (ID, NomeCompleto, EmailInstitucional, Curso, PeriodoSemestre, SenhaHash)
       VALUES (?, ?, ?, ?, ?, ?)`,
      [id, nomeCompleto, email, curso, periodo, senhaHash],
      function (err) {
        if (err) {
          if (err.message.includes('UNIQUE constraint failed')) {
            return res.status(409).json({ message: 'E-mail já cadastrado.' });
          }
          return res.status(500).json({ message: 'Erro ao cadastrar usuário.' });
        }
        return res.status(201).json({ message: 'Usuário cadastrado com sucesso.' });
      }
    );
  } catch (error) {
    return res.status(500).json({ message: 'Erro interno.' });
  }
})

module.exports = router