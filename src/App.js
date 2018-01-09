import React, { Component } from 'react';
import Clock from './Clock';
import ClickCounter from './ClickCounter';
import FuturamaList from './FuturamaList';
import TemperatureConvert from './TemperatureConvert';
import TicTocGame from './game/TicTocGame';
import TodoList from './todo/TodoList';

class App extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="column">
            <Clock time={new Date().toLocaleString()} />
          </div>
          <div className="column">
            <ClickCounter />
          </div>
        </div>
        <div className="row">
          <div className="column">
            <FuturamaList></FuturamaList>
          </div>
          <div className="column">
            <TemperatureConvert></TemperatureConvert>
          </div>
        </div>
        <div className="row">
          <div className="column">
            <TicTocGame></TicTocGame>
          </div>
          <div className="column">
            <TodoList></TodoList>
          </div>          
        </div>          
      </div>
    );
  }
}

export default App;
