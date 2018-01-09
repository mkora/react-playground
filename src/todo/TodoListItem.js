import React, { Component } from 'react';

class TodoList extends Component {

  handleRemoveItem = (id) => (event) => {
    this.props.onClickRemove(id);
  }

  render() {
    return (
      <li className="list-group-item">
        <h4 className="list-group-item-heading">
          {this.props.data.title} <sup><span className="badge badge-info">{this.props.data.priority}</span></sup>
        </h4>
        <p>{this.props.data.description}</p>
        <input type="button" className="btn btn-danger btn-sm" value="Delete" 
          onClick={this.handleRemoveItem(this.props.data.id)} />
      </li>
    );
  }
}

export default TodoList;
