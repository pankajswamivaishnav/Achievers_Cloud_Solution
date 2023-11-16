const express = require("express");
const app = express();
const path = require("path");
var cors = require("cors");
require("dotenv").config();

// Port
const port = process.env.PORT;

// Route Defined
const userRoute = require("./routes/userRoutes");

// Database Connection
require("./db/conn");

// Middleware & Routes
app.use(cors());
app.use(express.json());
app.use(userRoute);

// static Files
app.use(express.static(path.join(__dirname, "../frontend/build")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/build/index.html"));
});

app.listen(port, (req, res) => {
  console.log(`I am listening on ${port}`);
});
