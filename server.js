const express = require("express");
const passport = require("passport");
const mongoose = require("mongoose");
const path = require("path");
require("dotenv").config();


// Express
const app = express();
const PORT = process.env.PORT || 3001;
const router = express.Router();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(express.static(path.join(__dirname, "client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

// Mongo DB
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/taskapp";

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true
});

const db = require("./models");

const routes = require("./routes")(router, db, passport, process.env.NODE_ENV);
app.use(routes);


// Passport
passport.use(require("./auth/googleConfig.js")(db, process.env.NODE_ENV));

passport.serializeUser((user, done) => {
  console.log("SERIALIZE");
  db.User.findOrCreate({
    where: { id: user.id },
    defaults: { name: user.name }
  }).then(() => {
    done(null, user);
  });
});
passport.deserializeUser((user, done) => {
  done(null, user);
});

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
