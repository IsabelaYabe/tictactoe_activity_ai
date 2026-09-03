'use strict';

// WINNING_COMBOS, checkWinner, getNextPlayer, applyMove, createInitialState
// are provided by game.js, loaded before this script.

// Map internal symbols (X/O) to display emojis
const SYMBOLS = { X: '🐱', O: '🐶' };

const cells    = document.querySelectorAll('.cell');
const status   = document.getElementById('status');
const restartBtn     = document.getElementById('restart');

let state = createInitialState();

function render() {
  cells.forEach((cell, i) => {
    const value = state.board[i];
    cell.textContent = value ? SYMBOLS[value] : '';
    cell.className   = 'cell' + (value ? ` ${value.toLowerCase()}` : '');
    cell.disabled    = value !== '' || state.gameOver;
  });
}

function setStatus(msg, cls = '') {
  // Replace internal X/O with display emojis in status messages
  const displayMsg = msg.replace('X', SYMBOLS.X).replace('O', SYMBOLS.O);
  status.textContent = displayMsg;
  status.className   = 'status' + (cls ? ` ${cls}` : '');
}

function handleClick(e) {
  const idx = Number(e.currentTarget.dataset.index);
  if (state.board[idx] || state.gameOver) return;

  const nextBoard = applyMove(state.board, idx, state.current);
  if (!nextBoard) return;
  state.board = nextBoard;
  render();

  // Animate the placed cell
  cells[idx].classList.add('placed');

  const result = checkWinner(state.board);

  if (result) {
    state.gameOver = true;
    if (result.winner) {
      result.combo.forEach(i => cells[i].classList.add('winning'));
      setStatus(`Player ${result.winner} wins!`, 'win');
    } else {
      setStatus("It's a draw!", 'draw');
    }
    // Disable all cells
    cells.forEach(c => (c.disabled = true));
    return;
  }

  state.current = getNextPlayer(state.current);
  setStatus(`Player ${state.current}'s turn`);
}

function restartGame() {
  state = createInitialState();
  render();
  setStatus(`Player ${state.current}'s turn`);
}

cells.forEach(cell => cell.addEventListener('click', handleClick));
restartBtn.addEventListener('click', restartGame);

// Initial render
render();
setStatus(`Player ${state.current}'s turn`);
