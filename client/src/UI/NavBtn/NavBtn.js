// Packages
import React from 'react';
//Components
import classes from './NavBtn.css';


const NavBtn = (props) => {
  return (
    <a id={props.name} onClick={props.clicked} >
      <div className={[classes.NavBtn, "inactive"].join(' ')}>
        {props.name}
      </div>
    </a>
  );
}

export default NavBtn;