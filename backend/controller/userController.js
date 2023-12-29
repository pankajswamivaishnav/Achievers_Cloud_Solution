// const User = require("../models/User");

const nodemailer = require("nodemailer");

// Methods Has Been Start
// const sendUser = async (req, res) => {
//   const { name, email, subject, message } = req.body;
//   try {
//     const user = await User.create({
//       name: name,
//       email: email,
//       subject: subject,
//       message: message,
//     });
//     res.json({
//       name: user.name,
//       email: user.email,
//       subject: user.subject,
//       message: user.message,
//     });
//   } catch (err) {
//     res.status(404).send("Do Not Send Data", err);
//   }
// };

const sendUser = async (req, res) => {
  let { name, email, subject, message } = req.body;
  console.log(name, email, subject, message);
  try {
    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });

    var mailOptions = {
      from: email,
      to: process.env.EMAIL,
      subject: subject,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log("not sending properly", error);
        res.status(500).send("Error sending email");
      } else {
        res.send("Send Mail Successfully");
        console.log("Email sent: " + info.response);
        // do something useful
      }
    });
  } catch (err) {
    console.log("backend catch error", err);
    res.status(500).send("Error");
  }
};

// const getContactData = (req, res) => {
//   const contactMetadata = {
//     title: "Contact Us | Achiever Cloud Solution",
//     description: "Get in touch with Achiever Cloud Solution for any queries...",
//     keywords: "Contact us, Achiever Cloud Solution contact, get in touch...",
//     // Add other relevant metadata
//   };

//   res.json({ metadata: contactMetadata });
// };

// Export Method
module.exports = { sendUser };
