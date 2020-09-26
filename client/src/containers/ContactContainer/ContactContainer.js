import React, { Component } from 'react';

import classes from './ContactContainer.css';
import Contact from '../../components/Contact/Contact';
import ContactForm from '../../components/ContactForm/ContactForm';

export default class ContactContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      subject: '',
      message: '',
      notification: '',
      notificationStyle: { display: 'none' },
      shift: false,
    };

    this.shiftHandler = this.shiftHandler.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  shiftHandler() {
    this.setState((prevState) => {
      return {
        shift: !prevState.shift,
      };
    });
  }

  changeHandler(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  submitHandler(e) {
    e.preventDefault();
    document.getElementById('emailForm').checkValidity();
    if (document.getElementById('emailForm').reportValidity()) {
      let {name, email, subject, message} = this.state;
      axios.post('https://us-central1-portfolio-a7892.cloudfunctions.net/submitMessage', {name, email, subject, message})
        .then(() => {
          this.setState({
            name: '',
            email: '',
            subject: '',
            message: '',
            notification: 'Message sent. Thanks for reaching out!',
            notificationStyle: { display: 'inline-block' }
          }, () => {
            document.getElementById("emailForm").reset();
          });
        })
        .catch((err) => console.error(err));
    }
  }

  render() {
    return (
      <section
        id="contact"
        className={classes.ContactContainer}
        style={{ transform: this.state.shift ? 'translateX(-100vw)' : 'translateX(0)' }}>
        <Contact clicked={this.shiftHandler}/>
        <ContactForm submitted={this.submitHandler} clicked={this.shiftHandler}/>
      </section>
    );
  }
}