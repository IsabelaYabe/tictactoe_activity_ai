# 🕹️ TicTacToe (Jogo da Velha) - Experimento de IA Generativa

Este projeto é parte de uma pesquisa educacional para investigar a **dívida cognitiva no desenvolvimento de software utilizando IA Generativa**.

## 📄 Termo de Consentimento
O termo de consentimento foi preenchido via Google Forms. Se você ainda não o preencheu, solicite o link ao professor responsável antes de iniciar o experimento.

## 🛠️ Configuração Inicial (Fork e Upstream)
Para iniciar o trabalho, você deve criar a sua própria versão (fork) do repositório base.

1. Acesse o repositório original e clique no botão **Fork**:
   [https://github.com/IsabelaYabe/tictactoe_activity_ai](https://github.com/IsabelaYabe/tictactoe_activity_ai)
2. Clone o repositório "forkado" para o seu ambiente local:
   ```bash
   git clone https://github.com/SEU_USUARIO/tictactoe_activity_ai.git
   cd tictactoe_activity_ai
   code .
   ```


---

## 📝 Tarefas do Experimento

O contexto de desenvolvimento envolverá a resolução de duas tarefas usando a assistência do GitHub Copilot.

### Tarefa 1: Emojis no lugar de X e O
Nesta primeira missão, você deve **substituir os símbolos tradicionais `X` e `O`** do jogo da velha por emojis:
- Onde era `X`, passará a ser 🐱 (cat face).
- Onde era `O`, passará a ser 🐶 (dog face).

**⚠️ Regras da Tarefa 1 (Pipeline MasteryAware):**
- Durante esta etapa, o assistente Copilot operará sob as regras do pipeline **MasteryAware**, projetado para garantir que você se mantenha como o "designer do software" em vez de apenas um revisor passivo de código gerado.
- **Onde ficam os artefatos:** cada iteração do pipeline vive em uma pasta própria dentro de `.brainsback/`, no formato `#######_descricao_AAAA.MM.DD_hhmmss`. A pasta desta tarefa já vem criada no repositório, com os artefatos em branco:

  ```
  .brainsback/0000001_substituir_simbolos_tradicionais_2026.09.01_000000/
  ```

  Nas instruções abaixo, `<pasta-da-tarefa>` se refere a ela. Use sempre os arquivos que estão **dentro** dessa pasta — o Copilot procura os artefatos ali, e não na raiz de `.brainsback/`.
- **Passo 1: Todo.md (Especificação Formal):** Antes do Copilot gerar qualquer código para você, **VOCÊ** deve preencher manualmente o arquivo `.brainsback/<pasta-da-tarefa>/TODO.md`. Ele serve como sua lousa para articular o problema, os requisitos e os critérios de sucesso. O Copilot é proibido de editar este arquivo; se você tentar pedir ajuda sem preenchê-lo, ele se recusará a codificar.
- **Passo 2: Implementação Assitida:** Uma vez que o `TODO.md` for preenchido com suas diretrizes, você e o Copilot formarão uma dupla (*Pair Programming*). Interaja naturalmente com o agente para atingir o objetivo, realizando testes contínuos da solução. O Copilot eventualmente gerará um artefato autônomo de relatório (`.brainsback/<pasta-da-tarefa>/REPORT.md`) resumindo o que construiu.
- **Passo 3: REACTO.md (Prova de Domínio):** Após a implementação concluir, **VOCÊ** elaborará ativamente o artefato `.brainsback/<pasta-da-tarefa>/REACTO.md` unindo a análise do sumário gerado pela IA com a conferência das linhas de código. O formato `REACTO` significa:
  - **R (Repeat):** Reafirme o problema com suas próprias palavras.
  - **E (Examples):** Dê exemplos de entrada/saída (ou ação/resultado) em casos de teste na vida real.
  - **A (Approach):** Qual estratégia em alto nível foi utilizada para solucionar o problema?
  - **C (Code):** Exponha os trechos mais cruciais, que funções realizam o quê, em quais arquivos estão definidas e quem as chama.
  - **T (Test):** Rastreie os resultados relatando testes e cenários experimentados (manuais, automáticos).
  - **O (Optimize):** Sugira melhorias de complexidade ou discuta os *"trade-offs"* estabelecidos na implementação. Nem sempre isso se aplica.
- Você pode e deve fazer qualquer questionamento ou tirar dúvidas com o próprio GitHub Copilot e/ou com o professor durante o processo.
- **Antes de fazer o commit**, você **deve perguntar ao Copilot**: *"Minha tarefa está pronta para commit e de acordo com as regras do pipeline mastery-aware?"*
- Apenas quando o Copilot validar sua conclusão (verificando os artefatos) e der o "OK", você deverá realizar o commit de todos os arquivos modificados nesta primeira etapa.

### 🔍 Revisão Socrática (imediatamente após a Tarefa 1)
Assim que a Tarefa 1 estiver concluída e commitada, e **antes de iniciar a Tarefa 2**, você fará a dinâmica de perguntas com o agente revisor. O pipeline MasteryAware ainda deve estar **ligado** nesta etapa.
- Solicite explicitamente ao Copilot no chat: **"Quero iniciar a revisão socrática."**
- O agente revisor irá analisar os artefatos (`TODO.md`, `REPORT.md`, `REACTO.md`) e o código que você produziu na Tarefa 1, e realizará algumas perguntas para compreender sua linha de raciocínio e testar seu domínio sobre o código.
- Essa etapa irá gerar um artefato consolidado (`.brainsback/<pasta-da-tarefa>/SOCRATIC_REVIEW.md`) ao fim da interação.
- **Atenção:** Você só deve seguir para a Tarefa 2 quando o revisor socrático concluir a revisão e registrar o veredito. Commite o artefato gerado antes de prosseguir.

### Tarefa 2: Implementação do Placar (Score)
Nesta segunda missão, você deverá **implementar um sistema de pontuação**, contabilizando e exibindo as vitórias do Gato (🐱) e do Cachorro (🐶).

**⚠️ Regras da Tarefa 2:**
- Esta tarefa é feita **sem restrições ao agente**: não há `TODO.md`, `REACTO.md`, revisão socrática ou qualquer outro artefato obrigatório.
- **Importante:** Antes de escrever o código ou conversar com o Copilot sobre essa tarefa, **desabilite o pipeline**. Para isso, execute no terminal o script adequado ao seu Sistema Operacional:
  - Linux / Mac: `./pipeline.sh OFF`
  - Windows: `pipeline.bat OFF`
- A partir de agora, o desenvolvimento não será mais monitorado pelo pipeline MasteryAware. Você deve desenvolver toda a solução interagindo livremente com o Copilot pelo chat.
- Garanta que a sua implementação esteja funcionando corretamente através de testes manuais e valide se os testes unitários do projeto continuam passando.
- Assim que o placar estiver totalmente funcional, realize um novo commit contendo as modificações referentes à segunda tarefa.

---

## 🚀 Pull Request

Com a Tarefa 1 (incluindo a revisão socrática) e a Tarefa 2 concluídas e commitadas, envie o **Pull Request** para o repositório original da disciplina.
- Confirme que o artefato `SOCRATIC_REVIEW.md`, gerado na revisão socrática da Tarefa 1, está commitado junto com os demais arquivos.
- Confirme que os testes unitários do projeto continuam passando.
- Abra o Pull Request para aprovação no repositório original da disciplina.
