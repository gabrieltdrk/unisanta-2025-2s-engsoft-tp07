function isValidURL(url) {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

const tipoSessao = document.getElementById('tipoSessao');
const campoLocalLink = document.getElementById('campoLocalLink');
const recorrencia = document.getElementById('recorrencia');
const campoDataFinal = document.getElementById('campoDataFinal');
const btnAgendar = document.getElementById('btnAgendar');
const mensagem = document.getElementById('mensagem');

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
  validarCampos();
}
tipoSessao.addEventListener('change', renderCampoLocalLink);

recorrencia.addEventListener('change', () => {
  campoDataFinal.style.display = recorrencia.value ? 'block' : 'none';
  validarCampos();
});

// Validação dos campos
function validarCampos() {
  const form = document.getElementById('sessaoForm');
  const titulo = form.titulo.value.trim();
  const dataHora = form.dataHora.value;
  const tipo = form.tipo.value;
  const localLink = form.localLink ? form.localLink.value.trim() : '';
  const recorrenciaVal = form.recorrencia.value;
  const dataFinal = form.dataFinal ? form.dataFinal.value : '';

  let valido = true;
  if (!titulo || !dataHora || !tipo || !localLink) valido = false;
  const dataInicial = new Date(dataHora);
  if (!dataHora || dataInicial <= new Date()) valido = false;
  if (tipo === 'online' && !isValidURL(localLink)) valido = false;
  if (tipo === 'presencial' && !localLink) valido = false;
  if (recorrenciaVal && dataFinal) {
    const dataFinalObj = new Date(dataFinal);
    if (dataFinalObj <= dataInicial) valido = false;
  }
  btnAgendar.disabled = !valido;
}

document.getElementById('sessaoForm').addEventListener('input', validarCampos);

// Envio dos dados
document.getElementById('sessaoForm').addEventListener('submit', async function(e) {
  e.preventDefault();
  mensagem.textContent = '';
  mensagem.classList.remove('sucesso');

  const titulo = this.titulo.value.trim();
  const dataHora = this.dataHora.value;
  const tipo = this.tipo.value;
  const localLink = this.localLink ? this.localLink.value.trim() : '';
  const recorrenciaVal = this.recorrencia.value;
  const dataFinal = this.dataFinal ? this.dataFinal.value : '';

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
      btnAgendar.disabled = true;
    } else {
      const erro = await res.json();
      mensagem.textContent = erro.message || 'Erro ao agendar sessão.';
    }
  } catch {
    mensagem.textContent = 'Erro de conexão com o servidor.';
  }
});