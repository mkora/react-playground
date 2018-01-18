import React, { Component } from 'react';
import axios from 'axios';
import FilteredList from 'FilteredList';
import StarShipCharacteristics from 'StarShipCharacteristics';
import { handleError } from '../utils'

class SpaceShipList extends Component {

  url = 'https://swapi.co/api/';

  state = {
    data: null,
    one: null,
  };

  async componentDidMount() {
    try {
      const { data } = await axios.get(`${this.url}starships/`);
      this.setState({
        data: data.results.map((item, id) => ({ 
          id: id + 1, 
          ...item,
        })),
      });
      
    } catch (error) {
      handleError(error);
    }
  };

  handleListItemClick = (name) => {
    const { data } = this.state;
    this.setState({
      one: data.find((v) => v.name === name)
    });
  }

  render() {
    return (
      <div>
        {this.state.data && 
          <FilteredList data={this.state.data} onItemClick={this.handleListItemClick} />}
        {!this.state.data && 'Loading...'}
        {this.state.one && <StarShipCharacteristics {...this.state.one} />}
      </div>
    );
  };
}

export default SpaceShipList;
