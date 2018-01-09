import React, { Component } from 'react';
import TodoListItem from './TodoListItem';
import TodoInput from './TodoInput';
import './Todo.css';
import data from './data';

class TodoList extends Component {

  state = {
    data,
    lastId: data.length
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
      <div>
        <h3>
          <p>Don't forget what todo!</p>
        </h3>
        <TodoInput onAddItem={this.handleAddItem}/>
        <hr/>
        <h4>Things to do <span className="badge badge-pill badge-secondary">{this.state.data.length}</span></h4>
        <ul className="list-group">
          { this.state.data.map((item) => 
              <TodoListItem data={item} key={item.id} id={item.id} onClickRemove={this.handleRemoveItem(item.id)} />
          ) }
        </ul>          
      </div>
    );
  }
}

export default TodoList;
