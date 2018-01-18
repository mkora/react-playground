import React from 'react';

export default (props) => (
    <li>
      {typeof props.onClick === 'function' 
        && <a onClick={props.onClick}>#{props.id}. {props.name}</a>}
      {typeof props.onClick !== 'function' 
        && `#${props.id}. ${props.name}`}
    </li>
  );
