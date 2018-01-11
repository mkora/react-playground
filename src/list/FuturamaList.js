import React, { Component } from 'react';
import FuturamaItem from './FuturamaItem';
import data from './futurama';

class FuturamaList extends Component {

  state = {
    data,
    filter: '',
  }

  handleFilterInput = (event) => {
    const { value } = event.target;
    this.setState({
      filter: value,
      data: data.filter(item => 
        item.name
          .toLowerCase()
          .trim()
          .includes(value.toLowerCase())
      )
    });
  }

  render() {
    return (
      <div>
        <label htmlFor="filter-input">Search the name: </label>
        <input 
          id="filter-input" 
          type="text" 
          onChange={this.handleFilterInput} />
        <ul>
          {this.state.data.map((item) => 
            <FuturamaItem 
              name={item.name} 
              id={item.id} 
              key={item.id} />
          )}
        </ul>
      </div>
    );
  }
}

export default FuturamaList;
