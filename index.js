const express = require("express");
const app = express();
const path = require("path");
const redditData = require("./data.json");
console.log(redditData);

app.use(express.static(path.join(__dirname, "/public")));

app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/r/:subreddit", (req, res) => {
  const { subreddit } = req.params;
  const data = redditData[subreddit];
  if (data) {
    res.render("subreddit", { ...data });
  } else {
    res.render("notfound", { subreddit });
  }
});

app.get("/dogs", (req, res) => {
  const dogs = ["lab", "collie", "poodle", "pitbull", "terrier"];
  res.render("dogs", { dogs });
});

app.get("/rand", (req, res) => {
  const randNum = Math.floor(Math.random() * 10) + 1;
  res.render("random", { randNum });
});

app.listen(7000, () => {
  console.log("listening on port 7000");
});
