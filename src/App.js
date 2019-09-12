import React from 'react';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      board: Array(9).fill(null),
      player: "X"
    }
  }

  checkWinner() {
    let winLines =
      [
        ["0", "1", "2"],
        ["3", "4", "5"],
        ["6", "7", "8"],
        ["0", "3", "6"],
        ["1", "4", "7"],
        ["2", "5", "8"],
        ["0", "4", "8"],
        ["2", "4", "6"],
      ]
    for (let i = 0; i < winLines.length; i++) {
      const [a, b, c] = winLines[i]
      if (this.state.board[a] && (this.state.board[a] === this.state.board[b] && this.state.board[a] === this.state.board[c])) {
        alert(`player ${this.state.board[a]} Win`)
        this.setState({
          board: Array(9).fill(null)
        })
      }
    }
  }
  handleClick(index) {

    let newBoard = this.state.board
    if (this.state.board[index] === null) {
      newBoard[index] = this.state.player
      let newPlayer = this.state.player === "X" ? "O" : "X"
      this.setState({
        board: newBoard,
        player: newPlayer
      })
      this.checkWinner()
    }
  }

  render() {
    const Box = this.state.board.map(
      (box, index) =>
        <div className="box"
          key={index}
          onClick={() => this.handleClick(index)}>
          {box}
        </div >
    )
    return (
      <div className="container">
        <h2> Tic Tac Toe </h2>
        <div className="board">
          {Box}
        </div>
      </div>
    );
  }
}

export default App;
