// Packages
import React from 'react';
//Components
import classes from './About.css';
import Arrow from '../../UI/Arrow/Arrow';


const About = (props) => {
  return (
    <section id="about" className={classes.About}>
      <div id="aboutContent" className={[classes.Size, classes.AboutHide, 'container', 'scroll-show'].join(' ')}>
        <div className="section-title">About Me</div>
        <div
          className={classes.PicWindow}
          style={{
            backgroundImage: 'url(/assets/img/DK53A3i4.jpeg)'
          }}></div>
        <p className={classes.AboutBlurb}>
          Hi, I'm Adam! I'm a full-stack software developer with a passion for solving complex problems.
          I seek out opportunities to challenge myself, and find that's when I perform my best.
          <br/><br/>
          With nearly a decade of experience as a mechanical engineer, I have a proven track record
          of developing impactful, innovative products from concept through production. I'm drawn to
          programming by its limitless potential to drive positive global change, and I love the immediacy
          of the design process - the ability to design, test, and iterate is literally right at your
          fingertips.
          <br/><br/>
          I'm enthusiastically searching for a great opportunity to apply and expand my technical prowess.
          Let's build something great together!
        </p>
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <Arrow target="projects" color="#212529" />
        </div>
      </div>
    </section>
  );
}

export default About;