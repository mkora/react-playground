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

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    return (
      <div>
        <h4>Add new one</h4>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group row">
            <label className="col-form-label col-sm-3" htmlFor="inputTitle">What to do</label>
            <div className="col-sm-9">
              <input type="text" className="form-control" id="inputTitle" placeholder="eq. Clean your coffee maker"
                name="title" value={this.state.title} onChange={this.handleInputChange} />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-form-label col-sm-3" htmlFor="inputDescription">Give instructions</label>
            <div className="col-sm-9">
              <textarea className="form-control" id="inputDescription" placeholder="eq. Put a glass carafe in the dishwasher"
                name="description" value={this.state.description} onChange={this.handleInputChange}></textarea>
            </div>
          </div>
          <div className="form-group row">
            <label className="col-form-label col-sm-3" htmlFor="inputPriority">Importancy</label>
            <div className="col-sm-9">
              <select className="form-control" id="inputPriority"
                name="priority" value={this.state.priority} onChange={this.handleInputChange}>
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
              </select>
            </div>
          </div>          
          <input type="submit" className="btn btn-success mb-2" value="Add thing to do" />
        </form>
      </div>
    );
  }
}

export default TodoInput;
