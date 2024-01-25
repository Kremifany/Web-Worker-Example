const express = require("express");
const cors = require("cors");
const app = express();
const port = 3001; // Or any port you prefer

app.use(cors());

// Define the API endpoint
app.get("/", (req, res) => {
  res.send("Data from server: API Callback response");
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
