import React, { Component } from 'react';
import FuturamaItem from './FuturamaItem';

class FuturamaList extends Component {

  render() {
    return (
      <div>     
        <ul>
          {this.props.data.map((item) => 
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
