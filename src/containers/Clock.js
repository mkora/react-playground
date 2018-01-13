import React, { Component } from 'react';
import ClockDateTime from 'ClockDateTime';

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
        <ClockDateTime time={this.state.time} />
      </div>
    );
  };
}

export default Clock;
