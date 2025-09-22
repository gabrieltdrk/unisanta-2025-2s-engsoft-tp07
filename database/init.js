const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./database/connexa.db');

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS Usuario (
      ID TEXT PRIMARY KEY,
      NomeCompleto TEXT NOT NULL CHECK(length(NomeCompleto) <= 200),
      EmailInstitucional TEXT NOT NULL UNIQUE CHECK(length(EmailInstitucional) <= 150),
      Curso TEXT NOT NULL CHECK(length(Curso) <= 100),
      PeriodoSemestre INTEGER NOT NULL,
      SenhaHash TEXT NOT NULL
    )
  `);
});

module.exports = db;