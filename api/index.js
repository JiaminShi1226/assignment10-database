const express = require("express");
// Using express router to define different routes
const router = express.Router();



// Mount the api so any route on /test comes from test.js
router.use("/employee", require("./employee")); 
router.use("/department", require("./department"));
router.use("/salary", require("./salary"));
router.use("/position", require("./position"));

// Handling 404 Errors in our API
router.use((req, res, next) => {
  const error = new Error("404 Not Found");
  error.status = 404;
  next();
});

module.exports = router;
