const express = require("express");
// Using express router to define different routes
const router = express.Router();
const pool = require("../db");

//Router for post request to add data to the employee table
router.post("/", async (req, res) => {
  try {
    const { employee_id, name, email, address, department_id } = req.body; //request variables
    const newItems = await pool.query(
      "INSERT INTO employee (employee_id, name, email, address, department_id) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [employee_id, name, email, address, department_id]
    );

    res.json(newItems.rows[0]); // return the first row created
  } catch (err) {
    console.error(err); // Log the actual error
    res.status(500).json({ error: "An error occurred" }); // Send an appropriate error response
  }
});

//Router for get request to get all data from the department table
router.get("/", async (req, res) => {
  try {
    const allItems = await pool.query("SELECT * FROM employee");
    res.json(allItems.rows);
  } catch (err) {
    console.log("Error");
  }
});

module.exports = router;
