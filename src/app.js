const express = require("express");
const app = express();
const port = 7777;

app.use("/test", (req, res) => {
  res.send("test page");
});

// app.use("/users", (req, res) => {
//   res.send("HAHAHAHAHA");
// });

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

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
