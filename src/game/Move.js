import React, { Component } from 'react';

class Move extends Component {

  handleClick = (step) => (event) => {
    this.props.onClickJump(step);
  }

  render() {
    return (
      <li>
        <input 
          type="button" 
          value={
            this.props.move 
            ? `Go to move #${this.props.move}` 
            : 'Go to game start'
          } 
          onClick={this.handleClick()} />
      </li>
    );
  }
}

export default Move;
