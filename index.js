const express = require("express");
require("dotenv").config();

// datas
const QUESTIONS_DATA = require("./data/questions.json");
const CITIES_DATA = require("./data/cities.json");

const app = express();
const PORT = process.env.PORT || 7000;

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
