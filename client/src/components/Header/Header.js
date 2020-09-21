// Packages
import React from 'react';
// Components
import classes from './Header.css';

const Header = (props) => {

  return (
    <div className={classes.Header}>
      <div className={classes.Title}>
        Adam Gienapp
        <div className={classes.Subtitle}>
          <em>Full Stack Software Engineer</em>
        </div>
      </div>
      <div className={classes.Arrow}>
        <i className={`fa fa-angle-down`} aria-hidden="true"></i>
      </div>
    </div>
  );
}

export default Header;