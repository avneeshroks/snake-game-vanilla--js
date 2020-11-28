export default class Board {
  constructor(options) {
    this.options = options;
    this.initializeBoard();
  }

  initializeBoard() {
    this.draw();
    this.refresh();
  }

  draw(options) {
    // draw board of size n x n mentioned in options
  }
}
