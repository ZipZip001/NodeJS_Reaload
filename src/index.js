const express = require("express");
const app = express();

app.get("/api/data", (req, res) => {
  const jsonData = {
    name: "John Doe",
    age: 30,
    email: "johndoe@example.com"
  };

  res.json(jsonData);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});