# Tarefa: TASK-001 - Cadastro de Usuário

## TASK 009: Desenvolver o Formulário de Cadastro de Usuário

### Contexto do Projeto Connexa:
- Plataforma web para grupos de estudo universitário
- Stack: Node.js + Express + SQLite + HTML/CSS/JS
- Já temos a estrutura básica do projeto criada

### User Story: Como aluno universitário, quero desenvolver o Formulário de Cadastro de Usuário

### Critérios de Aceitação da Story:
1. Criar formulários com os seguintes campos:
2. Nome completo (input type="text")
3. E-mail institucional (input type="email")
4. Curso (input type="text" ou select, se tiver lista fixa)
5. Período/Semestre (input type= "select")
6. Senha (input type="password")
```JS
<form id="cadastroUsuario">
  <label>Nome Completo:</label>
  <input type="text" id="nomeCompleto" required maxlength="150">

  <label>E-mail Institucional:</label>
  <input type="email" id="email" required maxlength="150">

  <label>Curso:</label>
  <input type="text" id="curso" required maxlength="100">

  <label>Período/Semestre:</label>
  <input type="number" id="periodo" min="1" max="12" required>

  <label>Senha:</label>
  <input type="password" id="senha" required minlength="8">

  <button type="submit">Cadastrar</button>
</form>
```

### Resultado:
### HTML
```HTML
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <title>Cadastro de Usuário</title>
  <link rel="stylesheet" href="css/sessaoForm.css" />
</head>
<body>
  <form id="cadastroUsuario">
    <h2>Cadastro de Usuário</h2>
    <label>
      Nome Completo*:
      <input type="text" id="nomeCompleto" required maxlength="150" />
    </label>
    <label>
      E-mail Institucional*:
      <input type="email" id="email" required maxlength="150" />
    </label>
    <label>
      Curso*:
      <input type="text" id="curso" required maxlength="100" />
    </label>
    <label>
      Período/Semestre*:
      <input type="number" id="periodo" min="1" max="12" required />
    </label>
    <label>
      Senha*:
      <input type="password" id="senha" required minlength="8" />
    </label>
    <button type="submit" id="btnCadastrar">Cadastrar</button>
    <div id="mensagem"></div>
  </form>
  <script src="js/cadastroUsuario.js"></script>
</body>
</html>
```
### JS
```JS
document.getElementById('cadastroUsuario').addEventListener('submit', async function(e) {
  e.preventDefault();
  const nomeCompleto = this.nomeCompleto.value.trim();
  const email = this.email.value.trim();
  const curso = this.curso.value.trim();
  const periodo = this.periodo.value;
  const senha = this.senha.value;

  const mensagem = document.getElementById('mensagem');
  mensagem.textContent = '';
  mensagem.classList.remove('sucesso');

  if (!nomeCompleto || !email || !curso || !periodo || !senha) {
    mensagem.textContent = 'Preencha todos os campos obrigatórios.';
    return;
  }
  if (senha.length < 8) {
    mensagem.textContent = 'A senha deve ter pelo menos 8 caracteres.';
    return;
  }

  const payload = { nomeCompleto, email, curso, periodo, senha };

  try {
    const res = await fetch('/api/usuarios', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    if (res.ok) {
      mensagem.textContent = 'Usuário cadastrado com sucesso!';
      mensagem.classList.add('sucesso');
      this.reset();
    } else {
      const erro = await res.json();
      mensagem.textContent = erro.message || 'Erro ao cadastrar usuário.';
    }
  } catch {
    mensagem.textContent = 'Erro de conexão com o servidor.';
  }
});
```

## Task 045: Validar o domínio do e-mail

Antes do envio, validar se o e-mail contém @university.edu.
Caso inválido, mostrar mensagem ao usuário.
```JS
const email = document.getElementById("email").value;

if (!email.endsWith("@university.edu")) {
  alert("O e-mail precisa ser institucional (@university.edu).");
  return false; // impede envio
}
```
### TASK 046: Validação de Senha

3. Validação da senha
Validar os critérios abaixo, utilizando o Regex
@"^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$"
Mínimo de 8 caracteres
Pelo menos 1 letra maiúscula
Pelo menos 1 letra minúscula
Pelo menos 1 número

```JS
const senha = document.getElementById("senha").value;
const regexSenha = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

if (!regexSenha.test(senha)) {
  alert("A senha deve ter no mínimo 8 caracteres, incluindo letra maiúscula, minúscula e número.");
  return false; // impede envio
}
```