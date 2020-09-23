// Packages
import React from 'react';
//Components
import classes from './NavBtn.css';


const NavBtn = (props) => {
  const active = props.active ? classes.active : classes.inactive;
  const styles = [classes.NavBtn, active];

  return (
    <li className={styles.join(' ')} onClick={() => props.clicked(props.anchor)}>
      {props.name}
    </li>
  );
}

export default NavBtn;