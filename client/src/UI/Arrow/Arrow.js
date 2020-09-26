import React from 'react';
import smoothscroll from 'smoothscroll-polyfill';

import classes from './Arrow.css';


const scroller = (id) => {
  const element = document.getElementById(id);
  const y = element.getBoundingClientRect().top + window.pageYOffset - 50;
  window.scrollTo({
    top: y,
    behavior: 'smooth',
  });
}

const Arrow = (props) => {
  smoothscroll.polyfill();

  return (
    <i className={`fa fa-angle-down ${classes.Arrow}`} aria-hidden="true"
    style={{
      color: props.color,
    }}
    onClick={() => scroller(props.target)}></i>
  );
};

export default Arrow;