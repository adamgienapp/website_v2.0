// Packages
import React from 'react';
// Components
import classes from './ContactForm.css';
import Button from '../../UI/Button/Button';


const ContactForm = (props) => {
  return (
    <section className={classes.ContactForm}>
        <div className={[classes.Size, "container"].join(' ')}>
          <div className="section-title">Send a message</div>
          <form className={classes.FormBody} encType="multipart/form-data" id="emailForm" onSubmit={props.submit}>
            <div className={classes.FormRow}>
              <div className={classes.FormColM}>
                <input className={classes.FormBox} name="name" type="text" placeholder="Name (required)" required onChange={props.change}></input>
              </div>
              <div className={classes.FormColS} />
              <div className={classes.FormColM}>
                <input className={classes.FormBox} name="email" type="email" placeholder="Email (required)" required onChange={props.change}></input>
              </div>
            </div>
            <div className={classes.FormRow}>
              <div className={classes.FormColL}>
                <input className={classes.FormBox} name="subject" type="text" placeholder="Subject (optional)" onChange={props.change}></input>
              </div>
            </div>
            <div className={classes.FormRow}>
              <div className={classes.FormColL}>
                <textarea className={classes.FormBox} rows="10" name="message" type="text" placeholder="Message (required)" required onChange={props.change}></textarea>
              </div>
            </div>
            <div className={classes.ButtonContainer}>
              <Button type="submit" clicked={props.submitted}>Send</Button>
              <Button type="reset">Clear</Button>
              <Button clicked={props.clicked}>Go Back</Button>
            </div>
            {/*
              CHANGE TO MODAL? 
              <div className="submit-notification alert alert-success" style={props.notificationStyle}>{props.notification}</div>
            */}
          </form>
        </div>
    </section>
  );
}

export default ContactForm;