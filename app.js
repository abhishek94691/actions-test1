// Import the express module
const express = require('express');

// Create an instance of express
const app = express();

// Define the port where the app will be running
const port = 3000;

// Define a simple route to test the app
app.get('/', (req, res) => {
  res.send('Hello, World! This is a simple Node.js application.');
});

// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`App is running and listening on http://localhost:${port}`);
});

