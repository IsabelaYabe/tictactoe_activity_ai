# REACTO — Substituição dos símbolos por emojis

## R — Repeat (o problema)

Trocar os símbolos tradicionais do jogo da velha (X e O) por emojis de animais
(🐱 e 🐶) na interface, deixando a experiência mais lúdica. A lógica do jogo
permanece intacta: o tabuleiro, as regras de vitória e o controle de turnos
continuam operando com "X" e "O" internamente.

## E — Examples

Caminho feliz: o jogador 🐱 clica no centro e a célula passa a exibir 🐱; o
jogador 🐶 clica em um canto e a célula exibe 🐶. Quando 🐱 completa uma linha,
o status mostra "🐱 wins!".

Empate: todas as nove células preenchidas sem nenhuma reta fechada, e o status
mostra "It's a draw!".

Casos de borda: clique em célula já ocupada não faz nada; clique após o fim da
partida também não altera o tabuleiro.

## A — Approach

Separar apresentação de lógica. Como as regras já funcionavam corretamente com
"X" e "O", a mudança se limita à camada de renderização: um mapa de tradução
converte o valor interno no emoji correspondente apenas na hora de exibir.
Assim o `game.js` não é tocado e a suíte de testes existente continua válida
sem nenhuma adaptação.

## C — Code

- `script.js`: criado `const EMOJI_MAP = { X: '🐱', O: '🐶' }`.
- `script.js`: `render()` passou a consultar o mapa ao pintar cada célula.
- `script.js`: mensagens de status (vitória e indicação de turno) também passam
  pelo mapa.
- `index.html`: título atualizado para refletir a nova temática.

## T — Tests

Os 31 testes unitários do `tests.html` seguem passando, o que confirma que a
lógica não foi afetada. Além disso, uma partida completa foi jogada no
navegador para validar renderização, alternância de turnos, detecção de
vitória e empate.

## O — Optimization

Não há impacto de performance: o mapa é uma consulta O(1) por célula, feita
apenas na renderização.

O trade-off é manter "X" e "O" como representação interna e traduzir só na
view. Isso preserva a compatibilidade com os testes e com qualquer código que
dependa dos valores originais, ao custo de carregar um mapa de tradução. A
alternativa seria trocar os símbolos direto no `game.js`, o que quebraria os
testes existentes e acoplaria a lógica a uma escolha visual.
