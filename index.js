const { response } = require("express");
const express = require("express");
const app = express();
const fetch = require("node-fetch");
require("dotenv").config();

const PORT = process.env.PORT ?? 3000;
const WEATHER_URL = process.env.WEATHER_URL;
const API_KEY = process.env.WEATHER_KEY;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/weather", async (req, res) => {
  const city = req.query?.city;

  if (city.trim().length === 0) {
    res.status(400).send("City field is empty");
  }

  try {
    const response = await fetch(
      `${WEATHER_URL}/weather?q=${city}&appid=${API_KEY}`
    );
    const json = await response.json();

    // Return error in case the API had any issues.
    if (json?.cod !== 200) {
      return res.status(json?.cod).json(json);
    }

    return res.json(json);
  } catch (error) {
    return res.status(500).json(error);
  }
});

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});

module.exports = app;
