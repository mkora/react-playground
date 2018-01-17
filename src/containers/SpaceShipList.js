import React, { Component } from 'react';
import FilteredList from 'FilteredList';

class SpaceShipList extends Component {

  state = {
    data: ['...']
  };

  componentDidMount() {

  };

  render() {
    return (
      <FilteredList data={this.state.data} /> 
    );
  };
}

export default SpaceShipList;
