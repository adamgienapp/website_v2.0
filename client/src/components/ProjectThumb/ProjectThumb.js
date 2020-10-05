import React from 'react';

import classes from './ProjectThumb.css';


const ProjectThumb = (props) => {
  const { title, blurb } = props.data;

  return (
    <div className={classes.ProjectThumb} onClick={props.clicked}>
      <div className={classes.ProjectTitle}>{title}</div>
      <div className={classes.ProjectBlurb}>
        <span style={{ marginLeft: 'auto' }}>{blurb}</span>
        <span className={classes.Arrow} style={{ margin: '0 15px 0 auto' }}>
          <i className="fas fa-angle-double-right"></i>
        </span>
      </div>
    </div>
  );
}

export default ProjectThumb;