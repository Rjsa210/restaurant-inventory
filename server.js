const express = require("express");
const session = require("express-session");

const path = require("path");

const routes = require("./routes");


require("dotenv").config();

const PORT = process.env.PORT || 3001;

const app = express();


//import sequelize from config
const sequelize = require("./config/connection");
const sequelizeStore = require("connect-session-sequelize")(session.Store);

const sess = {
  secret: process.env.MY_SECRET,
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new sequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

// Define middleware
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(routes);

//serves static assets (i.e. heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// app.listen(PORT, () => {
//   console.log(`Hello World 🌎 ==> API server now on port ${PORT}!`);
// });

sequelize.sync({force: false}).then(() => {
  app.listen(PORT, () => console.log(`Hello World 🌎 ==> DB Synced... API server now on port ${PORT}!`));
});