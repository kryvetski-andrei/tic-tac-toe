class TicTacToe {
  constructor() {
    this.playground = [
      [null, null, null],
      [null, null, null],
      [null, null, null]
    ];

    this.currentPlayerSymbol = true;
  };

  getCurrentPlayerSymbol() {
    if (this.currentPlayerSymbol) {
      return 'x';
    } else {
      return 'o';
    };
  };

  nextTurn(rowIndex, columnIndex) {
    if (this.playground[columnIndex][rowIndex] === null){
      this.playground[columnIndex][rowIndex] = this.getCurrentPlayerSymbol();
      this.currentPlayerSymbol = !this.currentPlayerSymbol;
    };
  };

  isFinished() {
    if (this.isDraw()) return true;
    if (this.getWinner()) {
      return true;
    } else {
      return false;
    };
  };

  getWinner() {
    for (let i = 0; i < this.playground.length; i++) {
      if (this.playground[i][0] === this.playground[i][1]  && this.playground[i][1] === this.playground[i][2]) return this.playground[i][0];
      if (this.playground[0][i] === this.playground[1][i] && this.playground[1][i] === this.playground[2][i]) return this.playground[0][i]; 
    };

    if (this.playground[0][0] === this.playground[1][1] && this.playground[1][1] === this.playground[2][2]) return this.playground[0][0];
    if (this.playground[0][2] === this.playground[1][1] &&  this.playground[1][1] === this.playground[2][0]) return this.playground[0][2];

    return null;
  };

  noMoreTurns() {
    for (let i = 0; i < this.playground.length; i++) {
      for (let j = 0; j < this.playground[i].length; j++) {
        if (this.playground[i][j] === null) return false;
      };
    };

    return true;
  };

  isDraw() {
    if (!this.noMoreTurns() || this.getWinner() != null) return false; 
    return true;
  };

  getFieldValue(rowIndex, colIndex) {
    return this.playground[colIndex][rowIndex];
  };
};

module.exports = TicTacToe;
