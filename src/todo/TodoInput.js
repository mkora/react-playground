import React, { Component } from 'react';

class TodoInput extends Component {

  state = {
    title: '',
    description: '',
    priority: 'Low',
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onAddItem(this.state, event);
    this.setState({
      title: '',
      description: '',
      priority: 'Low',
    });
  }

  // TODO: add some validation
  handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="column-25">
              <label htmlFor="inputTitle">What to do</label>
            </div>
            <div className="column-75">
              <input type="text" id="inputTitle" placeholder="eq. Clean your coffee maker"
                name="title" value={this.state.title} onChange={this.handleInputChange} />
            </div>
          </div>
          <div className="row">
            <div className="column-25">
              <label htmlFor="inputDescription">Give instructions</label>
            </div>
            <div className="column-75">
              <textarea id="inputDescription" placeholder="eq. Put a glass carafe in the dishwasher"
                name="description" value={this.state.description} onChange={this.handleInputChange}></textarea>
            </div>
          </div>
          <div className="row">
            <div className="column-25">
              <label htmlFor="inputPriority">Importancy</label>
            </div>
            <div className="column-75">
              <select id="inputPriority" name="priority" 
                value={this.state.priority} onChange={this.handleInputChange}>
                  <option>Low</option>
                  <option>Medium</option>
                  <option>High</option>
              </select>
            </div>
          </div>   
          <div className="row">
            <input type="submit" value="Add thing in to do list" />
          </div>
        </form>
      </div>
    );
  }
}

export default TodoInput;
