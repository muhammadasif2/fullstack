const express = require("express");
const app = express();
const port = (process.env.PORT = 4000);
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/social", (req, res) => {
  res.send("welcom on social media!");
});
app.get("/twitter", (req, res) => {
  res.send("welcom on ecommer project!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
