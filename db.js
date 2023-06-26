const { Pool } = require("pg");

const pool = new Pool({
  host: "localhost",
  port: 5432,
  database: "assignment10",
  user: "postgres",
  password: "0917",
});

module.exports = pool;