// Packages
import React from 'react';
// Components
import classes from './Header.css';
import useWindowDimensions from '../../hooks/UseWindowDimensions';
import Arrow from '../../UI/Arrow/Arrow';


const Header = (props) => {
  const { height, width } = useWindowDimensions();

  let imgNum = 1;
  if (width / height < 0.9) {
    imgNum = 2;
  }

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
        <Arrow target="about" color="#fff" />
      </div>
    </section>
  );
}

export default Header;