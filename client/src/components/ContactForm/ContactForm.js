// Packages
import React, { Component } from 'react';
// Components
import classes from './ContactForm.css';


export default class ContactFrom extends Component {
  constructor(props) {
    this.state = {
      name: '',
      email: '',
      subject: '',
      message: '',
      notification: '',
      notificationStyle: { display: 'none' }
    };

    this.changeHandler = this.changeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
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
          }, () => setTimeout(() => {
              this.setState({
                notification: '',
                notificationStyle: { display: 'none' }
              })
            }, 3000)
          );
        })
        .catch((err) => console.error(err));
      document.getElementById("emailForm").reset();
    }
  }

  render() {
    return (
      <div className={classes.ContactForm}>
          <div className="container">
            <div className="section-title">Send a message</div>
            <hr></hr>
            <form className="contact-form" encType="multipart/form-data" id="emailForm" onSubmit={this.submitHandler}>
              <div className="">
                <div className="">
                  <input className="form-control" name="name" type="text" placeholder="Full Name (required)" required onChange={this.changeHandler}></input>
                </div>
                <div className="">
                  <input className="form-control" name="email" type="email" placeholder="Email (required)" required onChange={this.changeHandler}></input>
                </div>
              </div>
              <br></br>
              <div className="">
                <div className="">
                  <input className="form-control" name="subject" type="text" placeholder="Subject (optional)" onChange={this.changeHandler}></input>
                </div>
              </div>
              <br></br>
              <div className="">
                <div className="">
                  <textarea className="form-control" rows="10" name="message" type="text" placeholder="Message (required)" required onChange={this.changeHandler}></textarea>
                </div>
              </div>
              <br></br>
              <button type="submit" className="btn btn-dark">Send</button>
              <div className="submit-notification alert alert-success" style={this.state.notificationStyle}>{this.state.notification}</div>
            </form>
          </div>
      </div>
    );
  };
}