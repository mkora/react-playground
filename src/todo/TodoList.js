import React, { Component } from 'react';
import TodoListItem from './TodoListItem';
import TodoInput from './TodoInput';
import './Todo.css';

class TodoList extends Component {

  state = {
    data: this.props.data,
    lastId: this.props.data.length
  };

  handleRemoveItem = (id) => (event) => {
    this.setState((prevState) => {
      return {
        data: prevState.data.filter((v) => v.id !== id)
      };
    });
  }

  handleAddItem = (item) => {
    if (item.title !== '') {
      this.setState((prevState) => {
        const lastId = this.state.lastId + 1;
        return {
          data: [...prevState.data, Object.assign({}, item, {id: lastId})],
          lastId
        };
      });
    }
  }

  render() {
    return (
      <div className="todo">
        <div className="header">
          <h3>Don't forget what to do! You have <span className="badge badge-other">{this.state.data.length}</span> things in stack.</h3>
          <TodoInput onAddItem={this.handleAddItem} />
        </div>
        <ul>
          { this.state.data.map((item) => 
              <TodoListItem data={item} key={item.id} id={item.id} 
                onClickRemove={this.handleRemoveItem(item.id)} />
          ) }
        </ul>
      </div>
    );
  }
}

export default TodoList;
