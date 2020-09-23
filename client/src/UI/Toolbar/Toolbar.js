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
        <NavBtn anchor="about" name="About" active={false} clicked={scroller} />
        <NavBtn anchor="projects" name="Projects" active={false} clicked={scroller} />
        <NavBtn anchor="resume" name="Resume" active={false} clicked={scroller} />
        <NavBtn anchor="contact" name="Contact" active={false} clicked={scroller} />
      </ul>
    </nav>
  );
}

export default Toolbar;