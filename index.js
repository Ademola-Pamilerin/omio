const express = require("express");
require("dotenv");
const app = express();

app.use("/", (req, res) => {
  res.status(200).json({ msg: "Started" });
});

app.use("/testing", (req, res) => {
  res.send("Adenola");
});

const port = process.env.PORT ? process.env.PORT : 4000;

app.listen(port, () => {
  console.log("Started on port " + port);
});
