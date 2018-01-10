import React, { Component } from 'react';

class FuturamaItem extends Component {

  render() {
    return (
      <li>#{this.props.id}. {this.props.name}</li>
    );
  }
}

export default FuturamaItem;
