import React from 'react';

import classes from './ProjectThumb.css';


const ProjectThumb = (props) => {
  const { title, blurb } = props.data;

  return (
    <div className={classes.ProjectThumb} onClick={props.clicked}>
      <div className={classes.ProjectTitle}>{title}</div>
      <div className={classes.ProjectBlurb}>
        <div className={classes.Text}>{blurb}</div>
        <div className={classes.Arrow} style={{ margin: '0 15px 0 -43px' }}>
          <i className="fas fa-angle-double-right"></i>
        </div>
      </div>
    </div>
  );
}

export default ProjectThumb;