import React, { Component } from 'react';

class Square extends Component {

   /**
   * Pay attention to Parameterized Event Handlers 
   * when lifting state up, 
   *  handleClick = (i) => (event) => { ..use & pass event.. } -- for Square
   *  handleClick = (i) => (event) => { ..pass i.. }-- for Board
   *  handleClick = (i) => { ..use i.. } -- for Game
   * and in render (using 'currying'),
   *  onClick={this.handleClick()} -- for Square
   *  onClickSquare={this.handleClick(i)} -- for Board (parent)
   *  onClickBoard={this.handleClick} -- for Game (highest ancestor)
   */   
  handleClick = (i) => (event) => {
    this.props.onClickSquare(event.target.value); // envokes Square.handleClick(i, event)
  }

  render() {
    return (
      <input 
        type="button" 
        className="square" 
        value={this.props.value} 
        onClick={this.handleClick()} />
    );
  }
}

export default Square;
