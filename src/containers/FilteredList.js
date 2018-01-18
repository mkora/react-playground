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
    event.preventDefault();
    if (typeof this.props.onItemClick === 'function') {
      this.props.onItemClick(name);
    }
  }

  renderItem = (id, name) =>
    <ListItem 
      name={name} 
      id={id} 
      key={id} />

  renderClickableItem = (id, name) => 
    <ListItem 
      name={name} 
      id={id} 
      key={id} 
      onClick={this.handleItemClick(name)} />


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
            typeof this.props.onItemClick === 'function' 
              ? this.renderClickableItem(item.id, item.name)
              : this.renderItem(item.id, item.name)
          )}
        </ul>
      </div>
    );
  }
}

export default FilteredList;
