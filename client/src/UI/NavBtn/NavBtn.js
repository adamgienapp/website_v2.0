// Packages
import React from 'react';
//Components
import classes from './NavBtn.css';


const NavBtn = (props) => {
  return (
    <li id={props.name}
      className={[classes.NavBtn, "inactive"].join(' ')}
      onClick={props.clicked} >
      {props.name}
    </li>
  );
}

export default NavBtn;