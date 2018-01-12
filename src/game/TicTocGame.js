import React, { Component } from 'react';
import Board from './TicTocBoard';
import Move from './TicTocMove';

class TicTocGame extends Component {
  /**
   * Contains all list of moves of the 9 squares
   * on board, in future an element could look like
   * [
   *   'O', '',  'X',
   *   'X', 'X', 'O',
   *   'O', '',  '',
   * ]  
   */
  state = {
    history: [{
      squares: Array(9).fill(''),
    }],
    xIsNext: true,
    step: 0,
  }

  static calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }


  handleClick = (i) => {
    this.setState((prevState) => {
      const squares = prevState.history[prevState.step].squares.slice();
      // TODO: we call calc twice here and in render
      // but setState invokes re-rendering component)
      // (add it in state here doesn't help, bc 
      // this function handles clicks). So, where? 
      const winner = TicTocGame.calculateWinner(squares);
      if (winner || squares[i]) {
        return;
      }
      squares[i] = (this.state.xIsNext ? 'X' : 'O');
      return { 
        history: prevState.history.concat([{
          squares,
        }]),
        xIsNext: !prevState.xIsNext,
        step: prevState.history.length
      };
    });
  }

  handleClickMove = (step) => (event) => {
    this.setState((prevState) => {
      return {
        xIsNext: (step % 2) === 0,
        step,
      }
    });    
  }

  renderMove = (squares, step) => 
    <Move 
      key={step} 
      move={step} 
      onClickJump={this.handleClickMove(step)} />;

  render() {
    const current = this.state.history[this.state.step];
    const winner = TicTocGame.calculateWinner(current.squares);

    return (
      <div>
        <div className="game">
          <div className="game-board">
            <Board 
              squares={current.squares}
              onClickBoard={this.handleClick} />
          </div>
          <div className="game-info">
            <div className="status">
              {
                (winner) 
                  ? `Winner: ${winner}` 
                  : (`Next player: ${(this.state.xIsNext ? 'X' : 'O')}`)
              }
            </div>
            <ol>{this.state.history.map((squares, move) => this.renderMove(squares, move))}</ol>
          </div>
        </div>
      </div>
    );
  }
}

export default TicTocGame;
