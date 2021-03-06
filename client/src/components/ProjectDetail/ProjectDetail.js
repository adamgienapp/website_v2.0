import React, { useState } from 'react';

import classes from './ProjectDetail.css';
import Button from '../../UI/Button/Button';


const ProjectDetail = (props) => {
  const { title, shorthand, image, youtube, stack, info, link, github } = props.data;

  let imageBlock = null;
  if (youtube) {
    imageBlock = (
      <div className={classes.VideoContainer}>
        <iframe
          className={classes.Video}
          src={youtube} frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen={true} webkitallowfullscreen="true" mozallowfullscreen="true" oallowfullscreen="true">
        </iframe>
      </div> );
  } else if (Array.isArray(image)) {
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
      <div className={classes.ImageContainer}>
        <div className={classes.Slideshow}>
          {image.map((src, idx) => (
            <div
              className={classes.Fade}
              style={{ display: idx === slide ? 'block' : 'none' }}
              key={src}>
              <div className={classes.SlideNumber}>{idx + 1} / {image.length}</div>
              <img className={classes.Image} src={src} alt={`${title} image #${idx + 1}`}></img>
            </div>
          ))}
          <a className={classes.Prev} onClick={() => changeSlide(-1)}>
            <i className={"fa fa-angle-left"} aria-hidden="true"></i>
          </a>
          <a className={classes.Next} onClick={() => changeSlide(1)}>
            <i className={"fa fa-angle-right"} aria-hidden="true"></i>
          </a>
        </div>
      </div>
    );
  } else {
    imageBlock = image ?
      <div className={classes.ImageContainer}>
        <div className={classes.Slideshow}>
          <img className={classes.Image} src={image} alt={`${title} image`}></img>
        </div>
      </div>
      :
      null;
  }

  const reset = {
    title: null,
    shorthand: null,
    image: null,
    youtube: null,
    stack: null,
    info: null,
    link: null,
    github: null,
  };

  return (
    <section className={classes.ProjectDetail}>
      <div className={classes.Size}>
        {imageBlock}
        <div className={["container", classes.InfoContainer].join(' ')}>
          <div className={classes.InfoBlock}>
            <div className={classes.InfoLeft}>
              <div className={classes.ProjectTitle}>{shorthand || title}</div>
              <div className={classes.ProjectStack}>
                <strong>Tech stack</strong> | {stack}
              </div>
            </div>
            {info}
          </div>
        <div className={classes.BtnContainer}>
          { link ? <a href={link} target="_blank"><Button>Visit</Button></a> : null }
          { github ? <a href={github} target="_blank"><Button>Github Repo</Button></a> : null }
          <Button clicked={() => props.shift(reset)}>Back to projects</Button>
        </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetail;