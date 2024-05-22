import React, { Component } from 'react';

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
          change={this.changeHandler}
          submitted={() => {}}
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