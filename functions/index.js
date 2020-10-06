'use strict';

const functions = require('firebase-functions');
const nodemailer = require('nodemailer');
const cors = require('cors')({ origin: true });
const gmail =  require('./nodemailer.config');

const mailTransport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: gmail.acct,
    pass: gmail.pw
  }
});

exports.submitMessage = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    if (req.method !== 'POST') {
      res.status(500).send('Wrong request type!');
      return;
    }

    const mailOptions = {
      from: req.body.email,
      replyTo: req.body.email,
      to: gmail.acct,
      subject: `${req.body.name} sent you a message from adamgienapp.com`,
      text: req.body.message,
      html: `<p>${req.body.message}`
    };

    mailTransport.sendMail(mailOptions)
      .then(() => {
        res.status(200).send({ success: true });
        return;
      })
      .catch((error) => {
        console.log("You've hit this error");
        res.status(500).send({ failure: error });
        return;
      });
  });
});