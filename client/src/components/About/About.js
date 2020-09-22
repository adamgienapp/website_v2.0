// Packages
import React from 'react';
//Components
import classes from './About.css';

const About = (props) => {

  return (
    <section id="about" className="container">
      <div className={classes.Maintenance}>
        Currently under maintenance.
        <br/><br/>
        Check back soon!
      </div>
    </section>
  );
}

export default About;