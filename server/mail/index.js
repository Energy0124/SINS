//sinsisnotsteam@gmail.com
//sinsgames
import User from '../api/user/user.model';

'use strict';
var sendNewPassword = {
  sendMail: function (email) {
    var nodemailer = require('nodemailer');
    var randomstring = require("randomstring");
// create reusable transporter object using the default SMTP transport
    var transporter = nodemailer.createTransport('smtps://sinsisnotsteam%40gmail.com:sinsgames@smtp.gmail.com');

    var newPassword = randomstring.generate(10);
// setup e-mail data with unicode symbols
    var mailOptions = {
      from: '"SINS" <sinsisnotsteam@gmail.com>', // sender address
      to: email, // list of receivers
      subject: 'SINS Password Reset', // Subject line
      text: 'You password has been reset.\nYou new password is: ' + newPassword, // plaintext body
      html: 'You password has been reset.<br>You new password is: ' + newPassword // html body
    };


    User.findOneAsync({email: email})
      .then(user => { // don't ever give out the password or salt
        if (!user) {
          console.log('User not found!');
        } else {
          user.password = newPassword;
          console.log(user.password);
          user.save();
          //console.log(user.password);
          // send mail with defined transport object

          transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
              return console.log(error);
            }
            console.log('Message sent: ' + info.response);
          });
        }
      })
      .catch(err => console.log(err));


  }
}


export default sendNewPassword;
