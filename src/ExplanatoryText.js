import React from 'react';

export default (props) => 
  <h3>
    <p>{props.title}</p>
    <span>{props.children}</span>
  </h3>;
