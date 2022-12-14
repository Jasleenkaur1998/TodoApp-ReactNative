const nodemailer = require("nodemailer");
const handlebars = require("handlebars");

const fs = require("fs");
const path = require("path");

const sendEmail = async (email, subject, payload, template) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const source = fs.readFileSync(path.join(__dirname, template), "utf8");
  const compiledTemplate = handlebars.compile(source);
  const options = () => {
    return {
      from: process.env.FROM_EMAIL,
      to: "knowprabhjyot@gmail.com",
      subject,
      html: compiledTemplate(payload),
    };
  };

  transporter.sendMail(options(), (error, info) => {
      if(error){
        console.log("Error sending sent!", error);
          return error
      } else{
          console.log("Succesfully sent!");
          return res.status(200).json({ success: true })
      }
  });
};

module.exports = sendEmail