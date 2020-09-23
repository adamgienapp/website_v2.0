// Packages
import React from 'react';
import smoothscroll from 'smoothscroll-polyfill';
// Components
import classes from './Toolbar.css';
import NavBtn from '../NavBtn/NavBtn';


const scroller = (anchor) => {
  const element = document.getElementById(anchor);
  element.scrollIntoView({
    behavior: 'smooth',
  });
}

const Toolbar = (props) => {
  smoothscroll.polyfill();

  return (
    <nav id="navbar" className={classes.Toolbar}>
      <div id="logo" className={[classes.Logo, 'hide'].join(' ')} onClick={() => scroller("top")}>
        Adam Gienapp
      </div>
      <ul className={classes.NavLinks}>
        <NavBtn name="About" clicked={() => scroller('about')} />
        <NavBtn name="Projects" clicked={() => scroller('projects')} />
        <NavBtn name="Resume" clicked={() => scroller('resume')} />
        <NavBtn name="Contact" clicked={() => scroller('contact')} />
      </ul>
    </nav>
  );
}

export default Toolbar;