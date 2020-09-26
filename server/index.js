const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');

// const nodemailer = require('nodemailer');
// const config = require('../nodemailer.config');

const port = 3000;
const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(cors());

// app.post('/send', (req, res) => {
//   const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     port: 465,
//     auth: {
//       user: configs.acct,
//       pass: configs.pw
//     }
//   });

//   const mailOptions = {
//     from: `${req.body.email}`,
//     to: `${configs.acct}`,
//     subject: 'Message received from adamgienapp.com',
//     text: `Contact: ${req.body.name} \n
//           Email: ${req.body.email} \n
//           Subject: ${req.body.subject} \n
//           Message: ${req.body.message}`,
//     replyTo: `${req.body.email}`
//   }
  
//   transporter.sendMail(mailOptions, (error, response) => {
//     if (error) {
//       res.status(401).send('Error sending email');
//     } else {
//       res.status(201).send('Email sent successfully');
//     }
//     transporter.close();
//   });
// });

app.use('/', express.static(__dirname + '/../public'));
app.use('/:endpoint', express.static(__dirname + '/../public'));
app.listen(port, () => console.log(`Server listening on port ${port}`));
