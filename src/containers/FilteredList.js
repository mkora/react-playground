import React, { Component } from 'react';
import ListItem from 'ListItem';

class FilteredList extends Component {

  state = {
    data: this.props.data,
    filter: '',
  }

  handleFilterInput = (event) => {
    const { value } = event.target;
    this.setState({
      filter: value,
      data: this.props.data.filter(item => 
        item.name
          .toLowerCase()
          .trim()
          .includes(value.toLowerCase())
      )
    });
  }

  handleItemClick = (name) => (event) => {
    this.props.onItemClick(name);
  }

  render() {
    return (
      <div>
        <label htmlFor="filter-input">Search: </label>
        <input 
          id="filter-input" 
          type="text" 
          onChange={this.handleFilterInput} />
        <ul>
          {this.state.data.map((item) => 
            <ListItem 
              name={item.name} 
              id={item.id} 
              key={item.id} 
              onClick={this.handleItemClick(item.name)}
            />
          )}
        </ul>
      </div>
    );
  }
}

export default FilteredList;
