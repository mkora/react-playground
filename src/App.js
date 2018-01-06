import React, { Component } from 'react';
import Clock from './Clock';
import ClickCounter from './ClickCounter';

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
      </div>
    );
  }
}

export default App;
