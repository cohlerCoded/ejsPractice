const express = require("express");
const app = express();
app.set("view engine", "ejs");
app.get("/", (req, res) => {
  res.render("home.ejs");
});
app.listen(7000, () => {
  console.log("listening on port 7000");
});
