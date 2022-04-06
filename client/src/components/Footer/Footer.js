import React from 'react';

import classes from './Footer.css';

const Footer = (props) => (
  <section id="footer" className={classes.Footer}>
    <div style={{ margin: '0 auto' }}>&#169; Adam Gienapp {new Date().getFullYear()}</div>
    <p style={{ fontSize: 'small' , textAlign: 'center', lineHeight: 1.4 }}>
      Icons courtesy of:
      <br></br>
      Font Awesome by Dave Gandy - <a className={classes.TextLink} href="https://fontawesome.io" target="_blank">https://fontawesome.io</a>
    </p>
  </section>
);

export default Footer;