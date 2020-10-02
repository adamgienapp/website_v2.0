import React from 'react';

import classes from './ProjectThumb.css';


const ProjectThumb = (props) => {
  const { title, blurb } = props.data;

  return (
    <div className={classes.ProjectThumb}>
      {title}
    </div>
  );
}

export default ProjectThumb;