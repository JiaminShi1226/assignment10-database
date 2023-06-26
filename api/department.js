const express = require("express");
// Using express router to define different routes
const router = express.Router();
const pool = require("../db");

//Router for post request to add data to the department table
router.post("/", async (req, res) => {
  try {
    const { department_id, name, location } = req.body; //request variables
    const newItems = await pool.query(
      "INSERT INTO department (department_id, name, location) VALUES ($1, $2, $3) RETURNING *",
      [department_id, name, location]
    );

    res.json(newItems.rows[0]); // return the first row created
  } catch (err) {
    console.error(err); // Log the actual error
    res.status(500).json({ error: "An error occurred" }); // Send an appropriate error response
  }
});

//Router for get request to get all data from the employee table
router.get("/", async (req, res) => {
  try {
    const allItems = await pool.query("SELECT * FROM department");
    res.json(allItems.rows);
  } catch (err) {
    console.log("Error");
  }
});

module.exports = router;
