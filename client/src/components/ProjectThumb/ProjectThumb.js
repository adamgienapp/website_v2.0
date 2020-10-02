import React from 'react';

import classes from './ProjectThumb.css';


const ProjectThumb = (props) => {
  const { title, blurb } = props.data;

  return (
    <div className={classes.ProjectThumb} onClick={props.clicked}>
      <div className={classes.ProjectTitle}>{title}</div>
      <div className={classes.ProjectBlurb}>{blurb}</div>
    </div>
  );
}

export default ProjectThumb;