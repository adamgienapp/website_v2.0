// Packages
import React from 'react';
import smoothscroll from 'smoothscroll-polyfill';
// Components
import classes from './Header.css';
import useWindowDimensions from '../../hooks/UseWindowDimensions';


const scroller = () => {
  const element = document.getElementById("about");
  element.scrollIntoView({
    behavior: 'smooth',
  });
}

const Header = (props) => {
  const { height, width } = useWindowDimensions();

  let imgNum = 1;
  if (width / height < 0.9) {
    imgNum = 2;
  }

  smoothscroll.polyfill();

  return (
    <section id="top" className={classes.Header}
      style={{
        backgroundImage: `url(/assets/img/bg${imgNum}.jpg)`,
      }}>
      <div className={classes.Title}>
        <div className={classes.SlideInRight}>Adam Gienapp</div>
        <div className={classes.Subtitle}>
          <em>Full Stack Software Engineer</em>
        </div>
      </div>
      <div className={classes.ArrowContainer}>
        <i className={`fa fa-angle-down ${classes.Arrow}`} aria-hidden="true" onClick={scroller}></i>
      </div>
    </section>
  );
}

export default Header;