<template>
  <div class="tic-tac-toe-widget">
    <h2>Tic Tac Toe</h2>
    <div class="board">
      <div
        v-for="(cell, index) in board"
        :key="index"
        @click="handleClick(index)"
        :class="{ 'cell': true, 'player-x': cell === 'X', 'player-o': cell === 'O' }"
        :disabled="cell !== '' || isGameEnded"
      >
        {{ cell }}
      </div>
    </div>
    <button @click="resetGame">Reset</button>
    <p class="status">{{ status }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      board: ['', '', '', '', '', '', '', '', ''],
      currentPlayer: 'X',
      isGameEnded: false,
    };
  },
  computed: {
    status() {
      if (this.isGameEnded) {
        return 'Game Over!';
      }
      return `Player ${this.currentPlayer}'s turn`;
    },
  },
  methods: {
    handleClick(index) {
      if (!this.isGameEnded && this.board[index] === '') {
        this.board[index] = this.currentPlayer;
        this.checkWinner();
        this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
      }
    },
    checkWinner() {
      const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6], // Diagonals
      ];

      for (const combination of winningCombinations) {
        const [a, b, c] = combination;
        if (this.board[a] && this.board[a] === this.board[b] && this.board[a] === this.board[c]) {
          this.isGameEnded = true;
          return;
        }
      }
    },
    resetGame() {
      this.board = ['', '', '', '', '', '', '', '', ''];
      this.currentPlayer = 'X';
      this.isGameEnded = false;
    },
  },
};
</script>

<style scoped>
.tic-tac-toe-widget {
  text-align: center;
  padding: 20px;
}

.board {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  max-width: 300px;
  margin: 0 auto;
}

.cell {
  border: 1px solid #ccc;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.cell:hover {
  background-color: #f5f5f5;
}

.player-x {
  color: #ff1744;
}

.player-o {
  color: #2979ff;
}

button {
  padding: 10px 20px;
  background-color: #ff5722;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color0.3s ease;
  margin-top: 10px;
}
button:hover {
  padding: 10px 20px;
  background-color: #ff7e56;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color0.3s ease;
  margin-top: 10px;
}

.status {
  margin-top: 10px;
  font-size: 18px;
  color: #333;
}
</style>
