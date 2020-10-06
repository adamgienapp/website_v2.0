import React, { Component } from 'react';
import axios from 'axios';

import classes from './ContactContainer.css';
import Contact from '../../components/Contact/Contact';
import ContactForm from '../../components/ContactForm/ContactForm';
import Modal from '../../hoc/Modal/Modal';

export default class ContactContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      subject: '',
      message: '',
      notification: '',
      notificationStyle: true,
      modalDisplay: false,
      shift: false,
      preventSpam: false,
    };

    this.shiftHandler = this.shiftHandler.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
    this.modalCloseHandler = this.modalCloseHandler.bind(this);
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
      if (this.state.preventSpam) {
        this.setState({
          notification: "You've sent a message recently. Please wait at least 20 seconds before sending another.",
          notificationStyle: true,
          modalDisplay: true,
        });
      } else {
        let {name, email, subject, message} = this.state;
        axios.post('https://us-central1-portfolio-a7892.cloudfunctions.net/submitMessage', {name, email, subject, message})
          .then(() => {
            this.setState({
              name: '',
              email: '',
              subject: '',
              message: '',
              notification: 'Message sent. Thanks for reaching out!',
              notificationStyle: true,
              modalDisplay: true,
              preventSpam: true,
            }, () => {
              document.getElementById("emailForm").reset();
              setTimeout(() => {
                this.setState({
                  preventSpam: false
                });
              }, 20000);
            });
          })
          .catch((err) => {
            console.error(err);
            this.setState({
              notification: 'There was an error sending your message. Please try again later.',
              notificationStyle: false,
              modalDisplay: true,
              preventSpam: true,
            }, () => {
              setTimeout(() => {
                this.setState({
                  preventSpam: false
                });
              }, 20000);
            });
          });
      }
    }
  }

  modalCloseHandler() {
    this.setState({
      modalDisplay: false,
    });
  }

  render() {
    return (
      <section
        id="contact"
        className={classes.ContactContainer}
        style={{ transform: this.state.shift ? 'translateX(-100vw)' : 'translateX(0)' }}>
        <Contact clicked={this.shiftHandler}/>
        <ContactForm
          submitted={this.submitHandler}
          clicked={this.shiftHandler}
          notificationStyle={this.state.notificationStyle}
          notification={this.state.notification}
          modalDisplay={this.state.modalDisplay}
          close={this.modalCloseHandler} />
        <Modal show={this.state.modalDisplay} modalClosed={this.modalCloseHandler}>
          <div className={classes.Notification}>
            <p className={this.state.notificationStyle ? classes.Success : classes.Error}>{this.state.notification}</p>
          </div>
        </Modal>
      </section>
    );
  }
}