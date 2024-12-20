const express = require("express");
const app = express();
const port = 7777;
app.use("/", (req, res) => {
  res.send("Welcome to Express");
});

app.use("/test", (req, res) => {
  res.send("test page");
});
app.use("/hello", (req, res) => {
  res.send("Hello World");
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
