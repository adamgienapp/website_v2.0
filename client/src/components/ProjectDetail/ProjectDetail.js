import React, { useState } from 'react';

import classes from './ProjectDetail.css';
import Button from '../../UI/Button/Button';

const ProjectDetail = (props) => {
  const { title, image, stack, info, link, github } = props.data;

  let imageBlock = null;

  if (Array.isArray(image)) {
    const [slide, setSlide] = useState(0);

    const changeSlide = (delta) => {
      let newSlide = slide + delta;
      if (newSlide < 0) {
        newSlide = image.length - 1;
      }
      if (newSlide === image.length) {
        newSlide = 0;
      }
      setSlide(newSlide);
    }

    imageBlock = (
      <div className={classes.Slideshow}>
        {image.map((src, idx) => (
          <div
            className={classes.Fade}
            style={{ display: idx === slide ? 'block' : 'none' }}
            key={src}>
            <div className={classes.SlideNumber}>{idx + 1} / {image.length}</div>
            <img className={classes.Image} src={src}></img>
          </div>
        ))}
        <a className={classes.Prev} onClick={() => changeSlide(-1)}>
          <i className={"fa fa-angle-left"} aria-hidden="true"></i>
        </a>
        <a className={classes.Next} onClick={() => changeSlide(1)}>
          <i className={"fa fa-angle-right"} aria-hidden="true"></i>
        </a>
      </div>
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
        <div className={classes.ProjectStack}>
          <strong>Tech stack</strong> | {stack}
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