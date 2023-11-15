const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
require("dotenv").config();
const nodemailer = require("nodemailer");
const port = process.env.PORT || 8000;

// Middleware
app.use(cors());
app.use(express.json());

app.post("/contact-us", async (req, res) => {
  let { name, email, subject, message } = req.body;
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
      text: message,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log("not sending properly", error);
        res.status(500).send("Error sending email");
      } else {
        res.send("Send Mail Successfully");
        console.log("Email sent: " + info.response);
      }
    });
  } catch (err) {
    console.log("catch backend error: " + err);
  }
});

// static Files
app.use(express.static(path.join(__dirname, "../frontend/build")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/build/index.html"));
});

app.listen(port, () => {
  console.log(`i am listening on ${port}`);
});
