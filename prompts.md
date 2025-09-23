# Prompts Utilizados - Grupo 04

# Link projeto: https://orange-island-0a861b20f.1.azurestaticapps.net/
# Link DevOps: https://dev.azure.com/UNISANTA-1052N6A-AGV/connexa-agv/_sprints/taskboard/connexa-agv%20Team/connexa-agv/Etapa%202

# Tarefa: TASK-001 - Cadastro de Usuário

### TASK 009 (FRONTEND): Desenvolver o Formulário de Cadastro de Usuário

### Prompt Frontend:
Plataforma web para grupos de estudo universitário  
Stack: Node.js + Express + SQLite + HTML/CSS/JS  
Já temos a estrutura básica do projeto criada

User Story: Como aluno universitário, quero desenvolver o Formulário de Cadastro de Usuário

Critérios de Aceitação da Story:
1. Criar formulários com os seguintes campos:
2. Nome completo (input type="text")
3. E-mail institucional (input type="email")
4. Curso (input type="text" ou select, se tiver lista fixa)
5. Período/Semestre (input type= "select")
6. Senha (input type="password")

### Resultado:
O formulário HTML possui campos para nome completo, e-mail institucional, curso, período/semestre e senha, todos com validações básicas (`required`, limites de caracteres). Um botão "Cadastrar" envia o formulário. O JS valida os campos, verifica domínio do e-mail e força senha forte antes de enviar via POST para o backend. Mensagens de sucesso ou erro são exibidas ao usuário.

### TASK 045 (BACKEND): Validar domínio de e-mail

### Prompt Backend:
Antes do envio, validar se o e-mail contém @university.edu.  
Caso inválido, mostrar mensagem ao usuário.

Validação de Senha:  
Utilizar Regex para garantir pelo menos 8 caracteres, uma letra maiúscula, uma minúscula e um número.

### Resultado:
O endpoint `/api/usuarios` recebe os dados, valida todos os campos, verifica se o e-mail termina com "@university.edu" e se a senha é forte. Se tudo estiver correto, salva o usuário no banco SQLite. Retorna mensagens claras de erro ou sucesso.

# Tarefa: TASK-005 - Agenda de Estudo em Grupo 

### Tarefa: TASK-025 - Componente de Envio de Feedback

### Prompt Frontend:
Feedback sobre Sessões de Estudo

User Story: Como um aluno universitário, eu quero fornecer feedback, tanto individual quanto em grupo sobre as sessões de estudo, para que os outros participantes saibam o que funcionou bem e onde é possível melhorar.

Critérios de Aceitação da Story:
- Permitir comentários sobre as sessões de estudo;
- Feedback pode ser público ou privado;
- Sistema de avaliação por estrelas (1-5) + comentário;
- Feedback deve ser enviado em até 24h após término da sessão.

Campos do Formulário:
•  Avaliação: ⭐ 1 a 5 estrelas (obrigatório)
•  Comentário: campo de texto livre (obrigatório)
•  Visibilidade: seleção entre “Público” ou “Privado” (obrigatório)

Validações:
•  Todos os campos são obrigatórios
•  Comentário deve ter no mínimo 10 caracteres
•  Feedback só pode ser enviado até 24h após o término da sessão

### Resultado:
O componente exibe estrelas interativas, campo de comentário e seleção de visibilidade. JS valida os campos, controla o botão de envio e integra com o backend. Mensagens de sucesso, erro e alerta de prazo são exibidas ao usuário.



## Tarefa: TASK-039 - Formulário Alternativo de Agendamento de Sessão

### Prompt Frontend:
Formulário alternativo para agendamento de sessão, com validação aprimorada e integração ao endpoint de sessões.

### Resultado:
Interface semelhante ao formulário principal, com validações extras e feedback visual aprimorado. JS alterna campos conforme tipo de sessão, valida recorrência e envia dados ao backend, exibindo mensagens claras.

### Tarefa: TASK-043 - Criar formulário de agendamento de "sessão de estudo"

### Prompt Frontend:
Agenda de Estudo em Grupo

User Story: Como um aluno universitário, eu quero que o grupo de estudo tenha uma agenda para marcar sessões de estudo, para que todos os membros saibam os horários e possam participar ativamente.

Critérios de Aceitação da Story:
- O criador do grupo pode adicionar sessões de estudo à agenda;
- Os membros do grupo devem ser notificados sobre a agenda e horários das sessões.
- O sistema deve permitir a marcação de eventos recorrentes (ex: estudo semanal).
- O grupo pode definir se a sessão de estudo será online ou presencial.

Campos do Formulário:
•  Título da sessão (obrigatório)
•  Data e hora (obrigatório)
•  Tipo de sessão: online ou presencial (obrigatório)
•  Local físico ou link da reunião (obrigatório)
•  Recorrência: nenhuma, diária, semanal, mensal (opcional)
•  Data final da recorrência (se aplicável)

Validações:
•  Todos os campos obrigatórios devem estar preenchidos
•  Data e hora devem ser futuras
•  Se tipo for “online”, o campo de link deve ser validado como URL
•  Se tipo for “presencial”, o campo de local deve ser preenchido com texto
•  Se recorrência estiver ativa, a data final deve ser posterior à data inicial

### Resultado:
A interface apresenta um formulário intuitivo para agendar sessões de estudo, alternando dinamicamente entre campos de local/link conforme o tipo de sessão. O JS valida todos os campos, controla exibição de recorrência e envia os dados para o backend, exibindo mensagens de sucesso ou erro.