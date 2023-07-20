const express = require("express");
const QUESTIONS_DATA = require("./data/questions.json");
const CITIES_DATA = require("./data/cities.json");

const app = express();
const PORT = 6000;

app.get("/", (req, res) => {
  res.send("welcome to my server");
});

app.get("/questions", (req, res) => {
  res.json(QUESTIONS_DATA);
});

app.get("/cities", (req, res) => {
  res.json(CITIES_DATA);
});

app.listen(PORT, () => {
  console.log("app listening on port", PORT);
});

module.exports = app;
