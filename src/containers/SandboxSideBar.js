import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class SandboxSideBar extends Component {

  links = [
    {
      to: '',
      title: 'Home',
    },
    {
      to: 'clock',
      title: 'Clock Is Ticking',
    },
    {
      to: 'counter',
      title: 'Time to Stop',
    },
    {
      to: 'futurama',
      title: 'Fututama\'s World',
    },
    {
      to: 'temperature',
      title: 'F2C converter',
    },
    {
      to: 'tic-toc',
      title: 'Tic Toc'
    },
    {
      to: 'iron-man',
      title: 'I am Iron Man',
    },
    {
      to: 'todo',
      title: 'TODO List',
    },
    {
      to: 'contact',
      title: 'Contact Me',
    },
    {
      to: 'space-ships',
      title: 'Buy a starship',
    }      
  ];

  state = {
    collapsed: true,
  };

  toggleSideBar = () => {
    this.setState((prevState) => {
      return {
        collapsed: !prevState.collapsed
      };
    });
  }

  render() {
    return (
      <div className={`aside ${(!this.state.collapsed ? 'open' : '')}`}>
        <ul>
          {this.links.map((link) => <li key={link.to}>
            <NavLink 
              to={`/${link.to}`} 
              activeClassName="active"
              exact >{link.title}</NavLink></li>)}
        </ul>
        <a className="icon" onClick={this.toggleSideBar}>&#9776;</a>
      </div>
    );
  }
}

export default SandboxSideBar;
