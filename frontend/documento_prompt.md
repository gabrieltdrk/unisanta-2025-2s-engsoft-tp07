# Prompts Utilizados - Grupo X

## Tarefa: 43 - [FRONT-END] 1 - Criar formulário de agendamento de "sessão de estudo"

### Prompt Frontend:

Agenda de Estudo em Grupo

User Story: Como um aluno universitário, eu quero que o grupo de estudo tenha uma agenda para marcar sessões de estudo, para que todos os membros saibam os horários e possam participar ativamente.

Critérios de Aceitação da Story:
✅ O criador do grupo pode adicionar sessões de estudo à agenda;
✅ Os membros do grupo devem ser notificados sobre a agenda e horários das sessões.
✅ O sistema deve permitir a marcação de eventos recorrentes (ex: estudo semanal).
✅ O grupo pode definir se a sessão de estudo será online ou presencial.

...

Descrição:
Desenvolver o formulário de interface que permitirá ao criador do grupo agendar sessões de estudo. O formulário deve incluir campos para título, data e hora, tipo de sessão (online ou presencial), local ou link, e configuração de recorrência. A tarefa contempla a construção da interface e a integração com o endpoint de criação de sessão.

...

Campos do Formulário:
•  Título da sessão (obrigatório)
•  Data e hora (obrigatório)
•  Tipo de sessão: online ou presencial (obrigatório)
•  Local físico ou link da reunião (obrigatório)
•  Recorrência: nenhuma, diária, semanal, mensal (opcional)
•  Data final da recorrência (se aplicável)

...

Validações:
•  Todos os campos obrigatórios devem estar preenchidos
•  Data e hora devem ser futuras
•  Se tipo for “online”, o campo de link deve ser validado como URL
•  Se tipo for “presencial”, o campo de local deve ser preenchido com texto
•  Se recorrência estiver ativa, a data final deve ser posterior à data inicial

...

Critérios de Aceitação da Tarefa:
✅ O formulário está disponível para o criador do grupo  
✅ O usuário consegue preencher todos os campos e enviar a sessão  
✅ O formulário valida os dados antes do envio  
✅ Ao enviar, os dados são enviados para o endpoint /api/sessoes  
✅ O usuário recebe confirmação visual de sucesso ou erro


...


### Resultado:
A interface gerada para a **Agenda de Estudo em Grupo** apresenta um formulário simples e intuitivo, permitindo ao criador do grupo agendar novas sessões de estudo. No HTML, são renderizados campos obrigatórios para título, data e hora, tipo de sessão (online ou presencial), local físico ou link da reunião, além de opções de recorrência e data final (se aplicável). O botão de envio só é habilitado quando todos os campos estão preenchidos corretamente.

O CSS aplicado garante uma aparência moderna e limpa, com espaçamento adequado, cores suaves e destaque para elementos interativos, tornando o formulário agradável e fácil de usar.

O JavaScript implementa a lógica de validação dos campos em tempo real, alterna dinamicamente entre o campo de local ou link conforme o tipo de sessão escolhido, controla a exibição do campo de data final de recorrência e realiza o envio dos dados para o backend. Também exibe mensagens claras de sucesso ou erro após o envio, proporcionando uma boa experiência ao usuário.



...




## Tarefa: 25 - [FRONT-END] 1 - Criar componente de envio de feedback com "estrelas e comentário"

### Prompt Frontend:

Feedback sobre Sessões de Estudo

User Story: Como um aluno universitário, eu quero fornecer feedback, tanto individual quanto em grupo sobre as sessões de estudo, para que os outros participantes saibam o que funcionou bem e onde é possível melhorar.

Critérios de Aceitação da Story:
✅ O sistema deve permitir que os alunos deixem comentários sobre as sessões de estudo;
✅ O feedback pode ser público ou privado (somente para os membros do grupo);
✅ O feedback deve ser simples e objetivo (ex: 1-5 estrelas + comentário);
✅ O sistema, com o apoio da inteligência artificial, deve analisar o feedback e sugerir melhorias para futuras sessões de estudo, temas, estudos de caso, etc;
✅ O sistema, com o apoio da inteligência artificial, deve analisar o feedback a fim de impedir palavras inapropriadas, xingamentos bullying ou qualquer forma de discriminação;
✅ O feedback deverá ser reportado em até 24h pelos membros das sessões de estudo;
✅ O criador da sessão deve retornar os feedbacks em até 72h, para manter a sessão ativa.

...

Descrição:
Desenvolver o componente de interface responsável por permitir que o aluno envie feedback sobre uma sessão de estudo. O componente deve conter um sistema de avaliação por estrelas (1 a 5), um campo de comentário e uma opção para definir a visibilidade do feedback (público ou privado). A tarefa contempla apenas a construção da interface e a integração com o endpoint de envio de feedback.

...

Campos do Formulário:
•  Avaliação: ⭐ 1 a 5 estrelas (obrigatório)
•  Comentário: campo de texto livre (obrigatório)
•  Visibilidade: seleção entre “Público” ou “Privado” (obrigatório)

...

Validações:
•  Todos os campos são obrigatórios
•  Comentário deve ter no mínimo 10 caracteres
•  Feedback só pode ser enviado até 24h após o término da sessão (validação será feita no back-end, mas deve haver alerta visual)

...

Critérios de Aceitação da Tarefa:
✅ O componente está disponível na tela da sessão de estudo
✅ O aluno consegue selecionar estrelas, escrever comentário e escolher visibilidade
✅ O botão de envio está habilitado apenas quando todos os campos estão preenchidos corretamente
✅ Ao enviar, o feedback é enviado para o endpoint /api/feedbacks e o usuário recebe uma confirmação visual
✅ Em caso de erro (ex: campos inválidos ou falha na API), o sistema exibe mensagem clara ao usuário


...


### Resultado:

A interface de **Feedback sobre Sessões de Estudo** apresenta um formulário direto e acessível, permitindo ao aluno avaliar a sessão com estrelas (1 a 5), escrever um comentário e escolher a visibilidade do feedback (público ou privado). No HTML, são renderizados os elementos para seleção de estrelas, campo de texto para comentário, seleção de visibilidade, botão de envio e área para mensagens de alerta ou confirmação.

O CSS garante visual limpo e moderno, com destaque para o sistema de estrelas, campos bem espaçados e feedback visual para estados de sucesso ou erro.

O JavaScript torna as estrelas interativas, valida os campos em tempo real (incluindo tamanho mínimo do comentário), controla o estado do botão de envio e realiza a integração com o backend. Também exibe mensagens claras ao usuário e alerta sobre o prazo de envio do feedback.




...




## Tarefa: 39 - [[FRONT-END] 2 - Criar formulário de agendamento de "sessão de estudo"

### Prompt Frontend:

Feedback sobre Sessões de Estudo

User Story: Como um aluno universitário, eu quero fornecer feedback, tanto individual quanto em grupo sobre as sessões de estudo, para que os outros participantes saibam o que funcionou bem e onde é possível melhorar.

Critérios de Aceitação da Story:
✅ O sistema deve permitir que os alunos deixem comentários sobre as sessões de estudo;
✅ O feedback pode ser público ou privado (somente para os membros do grupo);
✅ O feedback deve ser simples e objetivo (ex: 1-5 estrelas + comentário);
✅ O sistema, com o apoio da inteligência artificial, deve analisar o feedback e sugerir melhorias para futuras sessões de estudo, temas, estudos de caso, etc;
✅ O sistema, com o apoio da inteligência artificial, deve analisar o feedback a fim de impedir palavras inapropriadas, xingamentos bullying ou qualquer forma de discriminação;
✅ O feedback deverá ser reportado em até 24h pelos membros das sessões de estudo;
✅ O criador da sessão deve retornar os feedbacks em até 72h, para manter a sessão ativa.

...

Descrição:
Desenvolver o formulário de interface que permitirá ao criador do grupo agendar sessões de estudo. O formulário deve incluir campos para título, data e hora, tipo de sessão (online ou presencial), local ou link, e configuração de recorrência. A tarefa contempla a construção da interface e a integração com o endpoint de criação de sessão.

...

Campos do Formulário:
•  Título da sessão (obrigatório)
•  Data e hora (obrigatório)
•  Tipo de sessão: online ou presencial (obrigatório)
•  Local físico ou link da reunião (obrigatório)
•  Recorrência: nenhuma, diária, semanal, mensal (opcional)
•  Data final da recorrência (se aplicável)

...

Validações:
•  Todos os campos obrigatórios devem estar preenchidos
•  Data e hora devem ser futuras
•  Se tipo for “online”, o campo de link deve ser validado como URL
•  Se tipo for “presencial”, o campo de local deve ser preenchido com texto

...

Critérios de Aceitação da Tarefa:
✅ O formulário está disponível para o criador do grupo  
✅ O usuário consegue preencher todos os campos e enviar a sessão  
✅ O formulário valida os dados antes do envio  
✅ Ao enviar, os dados são enviados para o endpoint /api/sessoes
✅ O usuário recebe confirmação visual de sucesso ou erro


...


### Resultado:

A interface de **Agendamento de Sessões de Estudo** exibe um formulário completo para o criador do grupo marcar novas sessões. No HTML, são renderizados campos para título, data e hora, tipo de sessão (online ou presencial), local físico ou link, opções de recorrência e data final, além do botão de envio e área para mensagens de confirmação ou erro.

O CSS proporciona um visual moderno, com campos organizados, espaçamento adequado e destaque para o botão de ação, garantindo boa usabilidade.

O JavaScript gerencia a validação dos campos em tempo real, alterna dinamicamente entre o campo de local ou link conforme o tipo de sessão, controla a exibição do campo de data final de recorrência e realiza o envio dos dados para o backend, exibindo mensagens claras de sucesso ou erro ao usuário.