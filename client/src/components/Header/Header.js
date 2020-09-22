// Packages
import React from 'react';
// Components
import classes from './Header.css';
import useWindowDimensions from '../../hooks/UseWindowDimensions';


const Header = (props) => {
  const { height, width } = useWindowDimensions();

  let imgNum = 1;
  if (width / height < 0.9) {
    imgNum = 2;
  }

  return (
    <div className={classes.Header}
      style={{
        backgroundImage: `url(/assets/img/bg${imgNum}.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: '50% 20%',
      }}>
      <div className={classes.Title}>
        Adam Gienapp
        <div className={classes.Subtitle}>
          <em>Full Stack Software Engineer</em>
        </div>
      </div>
      <div className={classes.ArrowContainer}>
        <i className={`fa fa-angle-down ${classes.Arrow}`} aria-hidden="true"></i>
      </div>
    </div>
  );
}

export default Header;