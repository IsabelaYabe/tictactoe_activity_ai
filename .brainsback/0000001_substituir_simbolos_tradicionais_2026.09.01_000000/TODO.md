# Strategic Blueprint

> Focus on the **what** and **why**. The code will follow.

**Hard rule**: AI agents must not edit this file and must not draft paste-ready content for it.

## The Problem

Trocar os símbolos X e O do jogo da velha por 🐱 (cat face) e 🐶 (dog face) na interface do usuário.

Onde mexer
script.js — principalmente na função render(), que é onde o texto é colocado nas células. Lá a gente mapeia 'X' → 🐱 e 'O' → 🐶.
script.js — mensagens de status tipo "Player X wins!" também precisam ser atualizadas.
game.js — a lógica pura (applyMove, checkWinner) a gente não mexe, porque os testes dependem dela com 'X' e 'O'.

## Steps

- [
  Abrir o tests.html no navegador e ver se passa.
  Jogar uma partida manualmente para ver se os emojis aparecem certinho. ]

## Success Looks Like

- [Usuário vê 🐱 e 🐶 no tabuleiro.
  Jogo funciona normal (clica, alterna, detecta vitória, reinicia).
  Testes passam.
  ]

## Notes

- [ ]

---

**⚠️ HUMAN ONLY**: This file is your strategic space. AI agents must not edit it.
