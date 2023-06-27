const express = require("express");
const PORT = 8080;
const app = express();

app.use(express.json());
//Mounted on API
app.use("/api", require("./api"));

// Function to run server. We can pass in other functions or middleware to enable logging or authentication
// Note it doesn't need to be here though
const serverRun = () => {
  const server = app.listen(PORT, () => {
    console.log(`Live on port: ${PORT}`);
  });
};

serverRun();