const estrelas = document.querySelectorAll('#estrelas span');
const avaliacaoInput = document.getElementById('avaliacao');
const comentarioInput = document.getElementById('comentario');
const visibilidadeInput = document.getElementById('visibilidade');
const btnEnviar = document.getElementById('btnEnviar');
const mensagem = document.getElementById('mensagem');
const alerta24h = document.getElementById('alerta24h');

// Simulação: data/hora de término da sessão (substitua pelo valor real)
const terminoSessao = new Date(Date.now() - 23 * 60 * 60 * 1000); // 23h atrás
const agora = new Date();
if ((agora - terminoSessao) > 24 * 60 * 60 * 1000) {
  alerta24h.style.display = 'block';
  btnEnviar.disabled = true;
}

// Estrelas
estrelas.forEach(star => {
  star.addEventListener('click', () => {
    const val = parseInt(star.getAttribute('data-value'));
    avaliacaoInput.value = val;
    estrelas.forEach((s, i) => {
      s.classList.toggle('ativa', i < val);
    });
    validarCampos();
  });
});

// Validação dos campos
function validarCampos() {
  const avaliacao = avaliacaoInput.value;
  const comentario = comentarioInput.value.trim();
  const visibilidade = visibilidadeInput.value;
  let valido = true;

  if (!avaliacao || !comentario || !visibilidade) valido = false;
  if (comentario.length < 10) valido = false;
  if ((agora - terminoSessao) > 24 * 60 * 60 * 1000) valido = false;

  btnEnviar.disabled = !valido;
}

comentarioInput.addEventListener('input', validarCampos);
visibilidadeInput.addEventListener('change', validarCampos);

// Envio do feedback
document.getElementById('feedbackForm').addEventListener('submit', async function(e) {
  e.preventDefault();
  mensagem.textContent = '';
  mensagem.classList.remove('sucesso');

  const payload = {
    avaliacao: parseInt(avaliacaoInput.value),
    comentario: comentarioInput.value.trim(),
    visibilidade: visibilidadeInput.value
  };

  try {
    const res = await fetch('/api/feedbacks', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    if (res.ok) {
      mensagem.textContent = 'Feedback enviado com sucesso!';
      mensagem.classList.add('sucesso');
      this.reset();
      estrelas.forEach(s => s.classList.remove('ativa'));
      avaliacaoInput.value = '';
      btnEnviar.disabled = true;
    } else {
      const erro = await res.json();
      mensagem.textContent = erro.message || 'Erro ao enviar feedback.';
    }
  } catch {
    mensagem.textContent = 'Erro de conexão com o servidor.';
  }
});