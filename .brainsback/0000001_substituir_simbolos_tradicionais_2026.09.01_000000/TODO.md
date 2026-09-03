# Strategic Blueprint

> Focus on the **what** and **why**. The code will follow.

**Hard rule**: AI agents must not edit this file and must not draft paste-ready content for it.

## The Problem
O jogo da velha atual usa os símbolos tradicionais `X` e `O` para marcar as jogadas dos dois
jogadores. Quero substituir esses símbolos por emojis, mantendo toda a lógica do jogo
(regras, verificação de vitória, empate, alternância de turnos) exatamente como está. 

## Steps
- [ ] Mapear todos os lugares do código onde os símbolos `X` e `O` aparecem para o usuário (renderização do tabuleiro, mensagens de status/turno, histórico de jogadas, tela de vitória/empate, etc.)
- [ ] Substituir toda exibição de `X` pelo emoji 🐱

- [ ] Substituir toda exibição de `O` pelo emoji 🐶

- [ ] Manter a lógica interna do jogo intacta (estado do tabuleiro, verificação de vitória/empate, alternância de turnos).
- [ ] Testar uma partida completa do início ao fim após a mudança

## Success Looks Like
- [ ] Jogador 1 (antes `X`) aparece sempre como 🐱 em qualquer lugar da interface
- [ ] Jogador 2 (antes `O`) aparece sempre como 🐶 em qualquer lugar da interface
- [ ] O jogo continua totalmente jogável, sem erros, do início ao fim
- [ ] Vitória, derrota e empate são detectados e exibidos corretamente com os novos emojis
- [ ] Nenhuma ocorrência residual de `X` ou `O` fica visível para o usuário na tela

## Notes
- [ ] A representação interna dos jogadores (variáveis, comparações no código) pode continuar usando `X`/`O` como identificador, mas a exibição final precisa mudar para os emojis
- [ ] Revisar os estilos do CSS, já que emojis se comportam diferente de texto simples
---
**⚠️ HUMAN ONLY**: This file is your strategic space. AI agents must not edit it.





