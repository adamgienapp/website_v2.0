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
  const navbar = document.getElementById("navbar");
  navbar.classList.remove(classes.Opened, 'expand');
}

const toggle = () => {
  const navbar = document.getElementById("navbar");
  const toggle = navbar.querySelector(`.${classes.MenuToggle}`);
  
  if (navbar.classList.contains(classes.Opened)) {
    navbar.classList.remove(classes.Opened, 'expand');
    toggle.setAttribute("aria-label", "Close navigation menu");
  } else {
    navbar.classList.add(classes.Opened, 'expand');
    toggle.setAttribute("aria-label", "Open navigation menu");
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
          <div className={classes.MenuToggle} onClick={toggle} aria-label="Open navigation menu">
            <div className={classes.IconBar}></div>
            <div className={classes.IconBar}></div>
            <div className={classes.IconBar}></div>
          </div>

          <div className={classes.NavMenu}>
            <ul className={classes.NavLinks}>
              <NavBtn name="About" clicked={() => scroller('about')} />
              <NavBtn name="Projects" clicked={() => scroller('projects')} />
              <NavBtn name="Resume" clicked={() => scroller('resume')} />
              <NavBtn name="Contact" clicked={() => scroller('contact')} />
            </ul>
          </div>
        </Aux>
      }
    </nav>
  );
}

export default Toolbar;