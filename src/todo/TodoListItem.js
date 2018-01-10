import React, { Component } from 'react';

class TodoList extends Component {

  handleRemoveItem = (id) => (event) => {
    this.props.onClickRemove(id);
  }

  render() {
    return (
      <li>
        <p>{this.props.data.title} <sup className="badge badge-info">{this.props.data.priority}</sup></p>
        <span>{this.props.data.description}</span>
        <span 
          type="button" 
          className="close"
          onClick={this.handleRemoveItem(this.props.data.id)}>X</span>
      </li>
    );
  }
}

export default TodoList;
