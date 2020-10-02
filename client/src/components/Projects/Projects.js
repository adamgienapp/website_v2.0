// Packages
import React from 'react';
// Components
import classes from './Projects.css';
import ProjectThumb from '../ProjectThumb/ProjectThumb';
// import Arrow from '../../UI/Arrow/Arrow';

const Projects = (props) => {
  return (
    <section className={classes.Projects}>
      <div id="projectsContent" className={[classes.Size, classes.ProjectsHide, 'container', 'scroll-show'].join(' ')}>
        <div className="section-title">Select Projects</div>

        <div className={classes.ProjectList}>
          {props.projects.map((data) => (
            <ProjectThumb data={data} key={data.title} clicked={() => props.clicked(data)}/>
          ))}
        </div>
        {/* <div style={{ textAlign: 'center', marginBottom: '20px' }}>
          <Arrow target="resume" color="#212529" />
        </div> */}
      </div>
    </section>
  );
}

export default Projects;