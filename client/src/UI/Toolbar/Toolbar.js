// Packages
import React from 'react';
import smoothscroll from 'smoothscroll-polyfill';
// Components
import classes from './Toolbar.css';
import Aux from '../../hoc/Aux/Aux';
import NavBtn from '../NavBtn/NavBtn';


const scroller = (anchor) => {
  const element = document.getElementById(anchor);
  const y = element.getBoundingClientRect().top + window.pageYOffset - 50;
  window.scrollTo({
    top: y,
    behavior: 'smooth',
  });
}

const expand = () => {
  const menuEl = document.getElementById("menu");
  if (menuEl.classList.contains(classes.Spin)) {
    menuEl.classList.remove(classes.Spin);
  } else if (!menuEl.classList.contains(classes.Spin)) {
    menuEl.classList.add(classes.Spin);
  }

  const nav = document.getElementById("navbar");
  if (navbar.className === classes.Toolbar) {
    navbar.className += `${classes.Responsive}`;
  } else {
    navbar.className = classes.Toolbar;
  }
}

const Toolbar = (props) => {
  smoothscroll.polyfill();

  return (
    <nav id="navbar" className={classes.Toolbar} role="navigation">
      <div id="logo" className={[classes.Logo, 'hide'].join(' ')} onClick={() => scroller("top")}>
        Adam Gienapp
      </div>
      {props.maintenance ?
        null
        :
        <Aux>
          <NavBtn name="About" clicked={() => scroller('about')} />
          <NavBtn name="Projects" clicked={() => scroller('projects')} />
          <NavBtn name="Resume" clicked={() => scroller('resume')} />
          <NavBtn name="Contact" clicked={() => scroller('contact')} />

          <div className={classes.DropdownBtn} onClick={expand}>
            <i id="menu" className={[classes.DropdownIcon, "fas fa-plus"].join(' ')}></i>
          </div>
        </Aux>
      }
    </nav>
  );
}

export default Toolbar;