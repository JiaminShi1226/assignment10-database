const express = require("express");
// Using express router to define different routes
const router = express.Router();
const pool = require("../db");

//Router for post request to add data to the position table
router.post("/", async (req, res) => {
  try {
    const { position_id, name, employee_id } = req.body; //request variables
    const newItems = await pool.query(
      "INSERT INTO department (position_id, name, employee_id) VALUES ($1, $2, $3) RETURNING *",
      [position_id, name, employee_id]
    );

    res.json(newItems.rows[0]); // return the first row created
  } catch (err) {
    console.error(err); // Log the actual error
    res.status(500).json({ error: "An error occurred" }); // Send an appropriate error response
  }
});

//Router for get request to get all data from the position table
router.get("/", async (req, res) => {
  try {
    const allItems = await pool.query("SELECT * FROM position");
    res.json(allItems.rows);
  } catch (err) {
    console.log("Error");
  }
});

module.exports = router;
