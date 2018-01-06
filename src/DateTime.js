import React, { Component } from 'react';

class DateTime extends Component {
  render() {
    return (
      <div>{this.props.time.toLocaleString()}</div>
    );
  }
}

export default DateTime;
