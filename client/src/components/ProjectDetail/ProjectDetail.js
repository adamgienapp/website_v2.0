import React from 'react';

import classes from './ProjectDetail.css';
import Button from '../../UI/Button/Button';

const ProjectDetail = (props) => {
  const { title, image, blurb, link, github } = props;

  let imageBlock = null;

  if (Array.isArray(image)) {

  } else {
    imageBlock = (
      <img src={props.image}></img>
    );
  }

  return (
    <section className={classes.ProjectDetail}>
      <div className="section-title">{title}</div>
      {imageBlock}
      {blurb}
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <Button clicked={props.shift}>Back to projects</Button>
      </div>
    </section>
  );
};

export default ProjectDetail;