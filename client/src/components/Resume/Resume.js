// Packages
import React from 'react';
// Components
import classes from './Resume.css';
import Button from '../../UI/Button/Button';

const Resume = (props) => {

  return (
    <section id="resume" className={classes.Resume}>
      <div id="resumeContent" className={[classes.Size, classes.ResumeHide, 'container', 'scroll-show'].join(' ')}>
        <div className="section-title light">My Resume</div>
        <div className={classes.ResumeBlurb}>
          The quick version:
          <ul>
            <li className={classes.ListItem}>A seasoned engineer with a proven track record of developing innovative, impactful products from concept through production.</li>
            <li className={classes.ListItem}>Experience at start-ups, global corporations, and everything in between.</li>
            <li className={classes.ListItem}>Education:
              <ul>
                <li className={classes.ListItem}>Hack Reactor - Advanced Software Engineering Immersive</li>
                <li className={classes.ListItem}>University of Michigan, Ann Arbor - B.S. in Mechanical Engineering</li>
              </ul>  
            </li>
          </ul>
        </div>
        <div style={{ textAlign: 'center', margin: '25px 0 40px 0' }}>
          <a className={classes.ATagClear} href="/assets/adam-gienapp-resume.pdf" >
            <Button>
              Download a copy
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Resume;