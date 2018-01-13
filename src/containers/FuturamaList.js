import React, { Component } from 'react';
import FuturamaItem from 'FuturamaItem';

class FuturamaList extends Component {

  static characters = [
    { id: 1, name: 'Philip J. Fry I' },
    { id: 2, name: 'Turanga Leela' },
    { id: 3, name: 'Bender Bending Rodríguez' },
    { id: 4, name: 'Hubert J. Farnsworth' },
    { id: 5, name: 'Hermes Conrad' },
    { id: 6, name: 'John A. Zoidberg' },
    { id: 7, name: 'Amy Wong' }
  ];

  state = {
    data: FuturamaList.characters,
    filter: '',
  }

  handleFilterInput = (event) => {
    const { value } = event.target;
    this.setState({
      filter: value,
      data: FuturamaList.characters.filter(item => 
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
