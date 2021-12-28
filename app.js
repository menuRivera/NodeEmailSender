require('dotenv').config();
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'process.env.EMAIL_USERNAME',
    pass: 'process.env.EMAIL_PASSWORD'
  }
});

var mailOptions = {
  from: 'seemslike@dontcare.comx',
  to: 'menu.rivera@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
