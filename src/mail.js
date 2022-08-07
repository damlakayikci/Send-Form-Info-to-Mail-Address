const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "hotmail", // your mail service. Hotmail for hotmail & outlook
  auth: {
    user: "yourSender@mail.address",
    pass: "your pass"
});

const sendMail = (email, subject, text, cb) => {
  const mailOptions = {
    from: "yourSender@mail.address",
    to: email,
    subject: subject,
    text: text,
  };

  transporter.sendMail(mailOptions, function (err, data) {
    if (err) {
      cb(err, null);
    } else {
      cb(null, data);
    }
  });
};

module.exports = sendMail;
