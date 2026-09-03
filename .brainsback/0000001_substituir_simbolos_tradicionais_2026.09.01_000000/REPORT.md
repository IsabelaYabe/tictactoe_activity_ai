# REPORT.md — Substituição de Símbolos (🐱 e 🐶)

## Objetivo
Substituir os símbolos tradicionais **X** e **O** do jogo da velha pelos emojis **🐱 (cat face)** e **🐶 (dog face)**, respectivamente, mantendo toda a lógica do jogo inalterada.

## Arquivos modificados

### `script.js`
- Adicionada a função `getSymbol(player)` que mapeia o identificador interno (`'X'` → `'🐱'`, `'O'` → `'🐶'`) para o emoji correspondente.
- `render()` agora chama `getSymbol(state.board[i])` ao definir `cell.textContent`.
- Mensagens de status (`setStatus`) passam a exibir o emoji via `getSymbol(result.winner)` e `getSymbol(state.current)`.
- A lógica interna do jogo (`'X'` e `'O'` como strings) permanece intacta em `game.js`.

### `index.html`
- Texto inicial do status alterado de `"Player X's turn"` para `"Player 🐱's turn"`.

## Arquivos **não** modificados
- `game.js` — Nenhuma alteração. Os identificadores `'X'` e `'O'` permanecem como estão, pois são usados internamente para lógica do jogo (vez do jogador, verificação de vitória, etc.).
- `style.css` — Nenhuma alteração. As classes CSS `.cell.x` e `.cell.o` continuam funcionando para estilização.
- `tests/game.test.js` — Nenhuma alteração. Os testes comparam strings internas (`'X'` e `'O'`), que não mudaram.

## Testes
- **31 testes executados, 31 passaram, 0 falhas** — mesmo resultado antes e depois da alteração.
- A interface foi verificada manualmente no navegador: o emoji 🐱 aparece no lugar do X, o 🐶 no lugar do O, e o rodízio de turnos funciona corretamente.

## Limitações / Riscos conhecidos
- Nenhum. A separação entre lógica (`game.js`) e apresentação (`script.js`) permitiu uma substituição limpa e segura.