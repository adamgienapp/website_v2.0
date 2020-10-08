// Packages
import React from 'react';
//Components
import classes from './About.css';


const About = (props) => {
  return (
    <section id="about" className={classes.About}>
      <div id="aboutContent" className={[classes.Size, classes.AboutHide, 'container', 'scroll-show'].join(' ')}>
        <div className="section-title light">Hi, I'm Adam</div>
        <div className={classes.ContentWrap}>
          <div
            className={classes.PicWindow}
            style={{
              backgroundImage: 'url(/assets/img/DK53A3i4.jpeg)'
            }}></div>
          <div>
            <p className={classes.AboutBlurb}>
              I'm a full-stack software developer based in Los Angeles, CA.
              <br/><br/>
              I enjoy building everything from applications to websites, with the ever-present goal to make a positive impact in peoples' lives.
              When I'm not writing clean, performant code, you can find me pursuing one of my many hobbies such as film photography, motorsports, or rock climbing.
              <br/><br/>
              Currently, I'm enthusiastically searching for a great opportunity to apply and expand my technical prowess.
              Let's build something great together!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;