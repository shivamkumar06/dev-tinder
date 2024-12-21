const express = require("express");
const app = express();

app.use(
  "/testRoute",
  (req, res, next) => {
    console.log("middleware 1");
    res.send("route 1");
    next();
  },
  (req, res) => {
    console.log("middleware 2");
    res.send("route 2");
  }
);

// app.use("/users", (req, res) => {
//   res.send("HAHAHAHAHA");
// });

// b is option in routing
app.get("/ab?c", (req, res) => {
  res.send({ firstName: "Shivam", lastName: "Kumar" });
});

// should start with a and end with c, and in  between a and c there should be any character
app.get("/ab+c", (req, res) => {
  res.send({ firstName: "John", lastName: "Deo" });
});

// any number of bc can be there in between a and d
app.get("/a(bc)+d", (req, res) => {
  res.send({ firstName: "Johnny", lastName: "Deo" });
});

// regex for anything ending with fly
app.get(/.*fly$/, (req, res) => {
  res.send({ regEX: "Regular Expression" });
});

// query params
app.get("/users", (req, res) => {
  console.log(req.query);
  res.send({ firstName: "Shivam", lastName: "Kumar" });
});

// dynamic routing
app.get("/users/:id", (req, res) => {
  console.log(req.params);
  res.send({ id: req.params.id });
});

app.get("/users", (req, res) => {
  res.send({ firstName: "Shivam", lastName: "Kumar" });
});

app.post("/users", (req, res) => {
  console.log("POST request");
  res.send({ message: "Post recived sucessfully" });
});

app.delete("/users", (req, res) => {
  console.log("DELETE request received");
  res.send({ message: "Deleted sucessfully" });
});
