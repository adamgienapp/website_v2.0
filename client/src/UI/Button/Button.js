import React from 'react';

import classes from './Button.css';

const Button = (props) => {
  return (
    <button
      className={classes.Button}
      type={props.type || 'button'}
      onClick={props.clicked || null}
      >
      {props.children}
    </button>
  );
};

export default Button;