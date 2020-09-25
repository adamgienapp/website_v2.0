// Packages
import React from 'react';
// Components
import classes from './Contact.css';
import Aux from '../../hoc/Aux/Aux';

const Contact = (props) => {
  
  return (
    <Aux>
      <section id="contact" className={classes.Contact}>
        <div id="contactContent" className={[classes.Size, classes.ContactHide, 'container', 'scroll-show'].join(' ')}>
          <div style={{ textAlign: 'center' }}>
            <div className="section-title">Contact Me</div>
            <div className={classes.MessageBtn}>
              Send a message
            </div>
          </div>

          <div>
            <div className="section-title">Make a connection</div>
            <div className={classes.SocialLinkContainer}>
              <a href="http://linkedin.com/in/adam-gienapp" target="_blank">
                <i className={[classes.SocialLink, classes.LiIcon, 'fa', 'fa-linkedin-square'].join(' ')} aria-hidden="true"></i>
              </a>
              <a href="http://github.com/adamgienapp" target="_blank">
                <i className={[classes.SocialLink, classes.GhIcon, 'fa', 'fa-github-square'].join(' ')} aria-hidden="true"></i>
              </a>
              <a href="http://instagram.com/podsixisjerks" target="_blank">
                <i className={[classes.SocialLink, classes.IgIcon, 'fab', 'fa-instagram-square'].join(' ')} aria-hidden="true"></i>
              </a>
              <a href="http://facebook.com/adam.gienapp" target="_blank">
                <i className={[classes.SocialLink, classes.FbIcon, 'fa', 'fa-facebook-square'].join(' ')} aria-hidden="true"></i>
              </a>
            </div>
          </div>

          <div className="section-title" style={{ marginBottom: '30px' }}>Thanks for stopping by!</div>
        </div>
      </section>
      <section id="footer" className={classes.Footer}>
        <div style={{ margin: '0 auto' }}>&#169; Adam Gienapp 2020</div>
        <p style={{ fontSize: 'small' , textAlign: 'center', lineHeight: 1.4 }}>
          Icons courtesy of:
          <br></br>
          Font Awesome by Dave Gandy - <a className={classes.TextLink} href="https://fontawesome.io" target="_blank">https://fontawesome.io</a>
        </p>
      </section>
    </Aux>
  );
}

export default Contact;