// Função para validar URL simples
function isValidURL(url) {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

// Campo local/link dinâmico
const tipoSessao = document.getElementById('tipoSessao');
const campoLocalLink = document.getElementById('campoLocalLink');

function renderCampoLocalLink() {
  if (tipoSessao.value === 'online') {
    campoLocalLink.innerHTML = `
      <label>
        Link da reunião*:
        <input type="url" name="localLink" id="localLink" required placeholder="https://..." />
      </label>
      <br />
    `;
  } else if (tipoSessao.value === 'presencial') {
    campoLocalLink.innerHTML = `
      <label>
        Local físico*:
        <input type="text" name="localLink" id="localLink" required />
      </label>
      <br />
    `;
  } else {
    campoLocalLink.innerHTML = '';
  }
}
tipoSessao.addEventListener('change', renderCampoLocalLink);

// Recorrência: mostrar campo data final
const recorrencia = document.getElementById('recorrencia');
const campoDataFinal = document.getElementById('campoDataFinal');
recorrencia.addEventListener('change', () => {
  campoDataFinal.style.display = recorrencia.value ? 'block' : 'none';
});

// Validação e envio
document.getElementById('sessaoForm').addEventListener('submit', async function(e) {
  e.preventDefault();
  const titulo = this.titulo.value.trim();
  const dataHora = this.dataHora.value;
  const tipo = this.tipo.value;
  const localLink = this.localLink ? this.localLink.value.trim() : '';
  const recorrenciaVal = this.recorrencia.value;
  const dataFinal = this.dataFinal ? this.dataFinal.value : '';

  const mensagem = document.getElementById('mensagem');
  mensagem.textContent = '';
  mensagem.classList.remove('sucesso');

  // Validações
  if (!titulo || !dataHora || !tipo || !localLink) {
    mensagem.textContent = 'Preencha todos os campos obrigatórios.';
    return;
  }
  const dataInicial = new Date(dataHora);
  if (dataInicial <= new Date()) {
    mensagem.textContent = 'A data e hora devem ser futuras.';
    return;
  }
  if (tipo === 'online' && !isValidURL(localLink)) {
    mensagem.textContent = 'Informe um link válido para reunião online.';
    return;
  }
  if (tipo === 'presencial' && !localLink) {
    mensagem.textContent = 'Informe o local físico da sessão.';
    return;
  }
  if (recorrenciaVal && dataFinal) {
    const dataFinalObj = new Date(dataFinal);
    if (dataFinalObj <= dataInicial) {
      mensagem.textContent = 'A data final da recorrência deve ser posterior à data inicial.';
      return;
    }
  }

  // Envio dos dados
  const payload = {
    titulo,
    dataHora,
    tipo,
    localLink,
    recorrencia: recorrenciaVal,
    dataFinal: recorrenciaVal ? dataFinal : null
  };

  try {
    const res = await fetch('/api/sessoes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    if (res.ok) {
      mensagem.textContent = 'Sessão agendada com sucesso!';
      mensagem.classList.add('sucesso');
      this.reset();
      campoLocalLink.innerHTML = '';
      campoDataFinal.style.display = 'none';
    } else {
      const erro = await res.json();
      mensagem.textContent = erro.message || 'Erro ao agendar sessão.';
    }
  } catch {
    mensagem.textContent = 'Erro de conexão com o servidor.';
  }
});