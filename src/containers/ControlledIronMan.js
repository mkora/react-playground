import React, { Component } from 'react';

class ControlledIronMan extends Component {

  static data = [
    'Anthony Edward "Tony" Stark',
    'Steven "Steve" Rogers',
    'Thor Odinson',
    'Samuel Thomas "Sam" Wilson',
    'Robert Bruce Banner',
    'Clinton Francis "Clint" Barton'
  ];

  state = {
    commaSeparated: '',
    multiLines: '',
    multiSelect: [],
  }

  handleSubmit = (event) => {
    event.preventDefault();
  }

  handleInputChange = (event) => {
    const { value } = event.target;
    const vals = value
      .split(',')
      .map(v => v.trim())
      .filter(Boolean);
    this.setState({
      commaSeparated: value,
      multiLines: vals.join('\n'), // includes
      multiSelect: vals
    });
  }

  handleTextareaChange = (event) => {
    const { value } = event.target;
    const vals = value
      .split('\n')
      .map(v => v.trim())
      .filter(Boolean);
    this.setState({
      commaSeparated: vals.join(', '), // includes
      multiLines: value,
      multiSelect: vals
    });
  }

  handleSelectChange = (event) => {
    const vals = Array.from(event.target.selectedOptions).map(v => v.value);
    this.setState({
      commaSeparated: vals.join(', '),
      multiLines: vals.join('\n'),
      multiSelect: vals
    });    
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="row">
          <label htmlFor="comma-separated">Who do you think is Iron Man (comma-separated): </label>
          <input 
            type="text" 
            id='comma-separated'
            value={this.state.commaSeparated}
            onChange={this.handleInputChange} />
        </div>

        <div className="row">
          <label htmlFor="multi-lines">Who do you think is Iron Man (start each from new line): </label>
          <textarea 
            type="text" 
            id='multi-lines'
            rows={ControlledIronMan.data.length}
            value={this.state.multiLines}
            onChange={this.handleTextareaChange}></textarea>
        </div>

        <div className="row">
          <label htmlFor="multi-select">Who do you think is Iron Man (choose several): </label>
          <select
            multiple
            type="text" 
            id='multi-select'
            size={ControlledIronMan.data.length}
            value={this.state.multiSelect}
            onChange={this.handleSelectChange}>
            {ControlledIronMan.data.map((v, k) => <option key={k} value={v}>{v}</option>)}
          </select>
        </div>

        <input type="submit" onSubmit={this.handleSubmit} />
      </form>
    );
  }
}

export default ControlledIronMan;
