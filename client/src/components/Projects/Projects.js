// Packages
import React from 'react';
// Components
import classes from './Projects.css';

const Projects = (props) => {

  return (
    <section id="projects" className={classes.Projects}>
      <div id="projectsContent" className={[classes.Size, classes.ProjectsHide, 'container', 'scroll-show'].join(' ')}>
        <div className="section-title">Select Projects</div>
      </div>
    </section>
  );
}

export default Projects;