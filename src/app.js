const express = require("express");
const app = express();
const port = 7777;
const { adminAuth, userAuth } = require("./middleware/auth");
// handle auth middleware for all routes
app.use("/admin", adminAuth);

app.get("/user", userAuth, (req, res) => {
  try {
    throw new Error("Something went wrong");
    res.send("User data");
  } catch (err) {
    console.log(err);
    res.status(500).send("Something went wrong, contact admin");
  }
});

app.get("/admin/getAllData", (req, res) => {
  res.send("All data sent");
});

app.get("/admin/deleteUsers", (req, res) => {
  res.send("All data deleted");
});

app.use("/", (err, req, res, next) => {
  if (err) {
    console.log(err);
    res.status(500).send("Something went wrong, generic error handler");
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
