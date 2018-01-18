import React from 'react';

export default (props) =>
  <ul>
    {Object.keys(props).map((key) => (
      <li key={key}>
        <span><strong>{key}</strong>: {props[key]}</span>
      </li>
    ))}
  </ul>;
