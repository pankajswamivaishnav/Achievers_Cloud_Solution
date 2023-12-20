const express = require("express");
// Import Controller Method
// const sendUser = require("../controller/userController");
const sendUser = require("../controller/userController");

// Router
const router = express.Router();

router.post("/contact", sendUser);

// Export
module.exports = router;
