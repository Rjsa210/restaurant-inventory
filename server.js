const express = require("express");

const path = require("path");

require("dotenv").config();

const PORT = process.env.PORT || 3001;

const app = express();



// Define middleware
app.use(express.urlencoded({extended: true}));
app.use(express.json());


//serves static assets (i.e. heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`Hello World 🌎 ==> API server now on port ${PORT}!`);
});