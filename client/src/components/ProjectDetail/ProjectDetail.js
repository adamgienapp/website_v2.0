import React from 'react';

import classes from './ProjectDetail.css';
import Button from '../../UI/Button/Button';

const ProjectDetail = (props) => {
  const { title, image, info, link, github } = props.data;

  let imageBlock = null;

  if (Array.isArray(image)) {
    imageBlock = (
      <p>TO-DO</p>
    );
  } else {
    imageBlock = image ? (
      <img className={classes.Image} src={image} alt={`${title} image`}></img>
    )
    :
    null;
  }

  const reset = {
    title: null,
    image: null,
    info: null,
    link: null,
    github: null,
  };

  return (
    <section className={classes.ProjectDetail}>
      <div className={[classes.Size, "container"].join(' ')}>
        <div className="section-title">{title}</div>
        <div className={classes.ImgContainer}>
          {imageBlock}
        </div>
        {info}
        <div className={classes.BtnContainer}>
          { link ? <a href={link} target="_blank"><Button>Visit</Button></a> : null }
          { github ? <a href={github} target="_blank"><Button>Github Repo</Button></a> : null }
          <Button clicked={() => props.shift(reset)}>Back to projects</Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetail;