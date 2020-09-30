// Packages
import React from 'react';
// Components
import classes from './Projects.css';
// import Arrow from '../../UI/Arrow/Arrow';

const Projects = (props) => {
  return (
    <section className={classes.Projects}>
      <div id="projectsContent" className={[classes.Size, classes.ProjectsHide, 'container', 'scroll-show'].join(' ')}>
        <div className="section-title">Select Projects</div>

        <div className={classes.ProjectList}>

        </div>
        {/* <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <Arrow target="resume" color="#212529" />
        </div> */}
      </div>
    </section>
  );
}

export default Projects;