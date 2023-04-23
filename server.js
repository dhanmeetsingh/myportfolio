const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();

// add middleware to parse request body
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// define route to handle form submission
app.post('/submit-form', (req, res) => {
  const { name, email, subject, message } = req.body;

  // create transporter to send email
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'dhanmeetnijhawan47@gmail.com', // replace with your email address
      pass: 'Hello@2296' // replace with your email password
    }
  });

  // define email options
  const mailOptions = {
    from: email,
    to: 'dhanmeetnijhawan47@gmail.com', // replace with your email address
    subject: subject,
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
  };

  // send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred while sending your message.' });
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).json({ message: 'Your message was sent successfully.' });
    }
  });
});

// start server
app.listen(3000, () => {
  console.log('Server started on port 3000.');
});
