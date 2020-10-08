// Packages
import React from 'react';
// Components
import classes from './Contact.css';
import Button from '../../UI/Button/Button';

const Contact = (props) => {
  return (
    <section className={classes.Contact}>
      <div id="contactContent" className={[classes.Size, classes.ContactHide, 'container', 'scroll-show'].join(' ')}>
        <div className="section-title">Contact Me</div>
        <div>
          <div className={classes.SocialLinkContainer}>
            <a href="http://linkedin.com/in/adam-gienapp" target="_blank">
              <i className={[classes.SocialLink, classes.LiIcon, 'fa', 'fa-linkedin-square'].join(' ')} aria-hidden="true"></i>
            </a>
            <a href="http://github.com/adamgienapp" target="_blank">
              <i className={[classes.SocialLink, classes.GhIcon, 'fa', 'fa-github-square'].join(' ')} aria-hidden="true"></i>
            </a>
            <a href="http://instagram.com/adam.gienapp" target="_blank">
              <i className={[classes.SocialLink, classes.IgIcon, 'fab', 'fa-instagram-square'].join(' ')} aria-hidden="true"></i>
            </a>
            <a href="http://facebook.com/adam.gienapp" target="_blank">
              <i className={[classes.SocialLink, classes.FbIcon, 'fa', 'fa-facebook-square'].join(' ')} aria-hidden="true"></i>
            </a>
          </div>
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <Button clicked={props.clicked}>
              Send a message
            </Button>
          </div>
        </div>

        <div className="bigger-text">Thanks for stopping by!</div>
      </div>
    </section>
  );
}

export default Contact;