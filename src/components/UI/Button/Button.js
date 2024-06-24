import React from 'react';

import  clases from './Button.module.css';

const Button = props => {
  return (
    <button type={props.type} className={clases.button}onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
