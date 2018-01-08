import React, { Component } from 'react';
import FuturamaItem from './FuturamaItem';

class FuturamaList extends Component {

  // @TODO: Pass data as FuturamaList this.props
  data = [
    { id: 1, name: 'Philip J. Fry I' },
    { id: 2, name: 'Turanga Leela' },
    { id: 3, name: 'Bender Bending Rodríguez' },
    { id: 4, name: 'Hubert J. Farnsworth' },
    { id: 5, name: 'Hermes Conrad' },
    { id: 6, name: 'John A. Zoidberg' },
    { id: 7, name: 'Amy Wong' }
  ];

  render() {
    return (
      <div>
        <h3>
          <p>If you were one of the Futurama characters, who would it be</p>
          <span>Playing with lists: UL, LI and 'key' attribute&nbsp;
            <em>(<strong>Keys</strong> help React identify which items 
            have changed, are added, or are removed. 
            Keys should be given to the elements inside the array 
            to give the elements a stable identity; <strong>don’t get passed 
            to your components</strong>)</em>. Using&nbsp;
            <strong>Array.map()</strong> function to get LI elements work.
          </span>
        </h3>      
        <ul>
          {this.data.map((item) => <FuturamaItem name={item.name} id={item.id} key={item.id}></FuturamaItem>)}
        </ul>
      </div>
    );
  }
}

export default FuturamaList;
