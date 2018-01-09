import React, { Component } from 'react';
import Square from './Square';

class Board extends Component {

  /**
   * Pay attention to Parameterized Event Handlers 
   * (see comment in ./Square)
   */
  handleClick = (i) => (event) => {
    this.props.onClickBoard(i); // envokes Board.handleClick(i)
  }

  renderSquare = (i) => 
    <Square key={i} value={this.props.squares[i]}
      onClickSquare={this.handleClick(i)} />;

  render() {
    return (
      <div>
        <div className="board-row">
          {[0, 1, 2].map((i) => this.renderSquare(i))}
        </div>
        <div className="board-row">
          {[3, 4, 5].map((i) => this.renderSquare(i))}
        </div>
        <div className="board-row">
          {[6, 7, 8].map((i) => this.renderSquare(i))}
        </div>
      </div>
    );
  }

}

export default Board;
