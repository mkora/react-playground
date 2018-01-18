import React from 'react';

export default (props) => (
    <li>
      <a onClick={props.onClick}>#{props.id}. {props.name}</a>
    </li>
  );
