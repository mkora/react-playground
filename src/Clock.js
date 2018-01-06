import React, { Component } from 'react';
import DateTime from './DateTime';

class Clock extends Component {
  /**
   * Used Stage-2 class-field syntax
   * 
   * Note: that initializtion can be written:
   *  constructor(props) {
   *   super(props);
   *   this.state = {time: new Date()};
   * }
   */
  state = {
    time: new Date(),
  };

  /**
   * Mounting: 
   * componentDidMount is called immediately after an instance 
   * of a component is being inserted into the DOM
   */
  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState({
        time: new Date()
      });
    }, 1000);
  };

  /**
   * Unmounting:
   * componentWillUnmount is called when a component is being 
   * removed from the DOM
   */
  componentWillUnmount() {
    clearInterval(this.intervalId);
  };

  /**
   * Render
   */
  render() {
    return (
      <div className="clock">
        <h3>
          <p>Clock Is Ticking</p>
          <span>Playing with State <em>(variable <strong>time</strong> changes 
              its value)</em>, Life-Cycle Methods <em>(
              <strong>componentDidMount</strong> is called immediately after 
              an instance of a component is being inserted into the 
              DOM; <strong>componentWillUnmount</strong> is called when a component 
              is being removed from the DOM)</em> and Stage-2 Class-Field Syntax
          </span>
        </h3>
        <DateTime time={this.state.time} />
      </div>
    );
  };
}

export default Clock;
