require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("<button>HELLO THERE</button>");
});

console.log(process.env.envvar);

app.post("/", (req, res) => {
  console.log(`Hello ${req.body.name}! How are you doing today?`);
  res.sendStatus(200);
});

app.listen(8080, () => console.log(`Started server at http://localhost:8080!`));
