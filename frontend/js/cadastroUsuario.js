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
  if (!email.endsWith('@university.edu')) {
    mensagem.textContent = 'O e-mail precisa ser institucional (@university.edu).';
    return;
  }
  const regexSenha = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
  if (!regexSenha.test(senha)) {
    mensagem.textContent = 'A senha deve ter no mínimo 8 caracteres, incluindo letra maiúscula, minúscula e número.';
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