import React from 'react';

import classes from './ProjectDetail.css';
import Button from '../../UI/Button/Button';

const ProjectDetail = (props) => {

  let imageBlock = null;

  if (Array.isArray(props.image)) {

  } else {
    imageBlock = (
      <img src={props.image}></img>
    );
  }

  return (
    <section className={classes.ProjectDetail}>
      <div className="section-title">{props.title}</div>


      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <Button clicked={props.shift}>Back to projects</Button>
      </div>
    </section>
  );
};

export default ProjectDetail;