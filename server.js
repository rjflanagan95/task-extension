const express = require("express");
const passport = require("passport");
const mongoose = require("mongoose");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const path = require("path");
require("dotenv").config();


// Mongo DB
const db = require("./models");
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/taskapp";

mongoose.connect(MONGODB_URI, {useNewUrlParser: true});

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

// Passport
passport.use(require("./auth/googleConfig.js")(db, process.env.NODE_ENV));

passport.serializeUser((user, done) => {
  db.User.findOne({ _id: user.id }, function(req, res) {
    if (!res) {
      const newUser = {
        _id: user.id,
        name: user.name
      }
      db.User.create(newUser);
    }
  }
  ).then((res) => {
    done(null, user);
  }).catch(function(err) {
    console.log(err)
  })
});
passport.deserializeUser((user, done) => {
  done(null, user);
});

app.use(cookieParser());
// app.use(session({ secret: process.env.SESSION_SECRET }));
app.use(passport.initialize());
app.use(passport.session());

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    cookie: {
      secure: false,
      httpOnly: true
    },
    resave: true,
    saveUninitialized: true
  })
);

function authRequired(req, res, next) {
  if (!req.session.passport) {
    req.session.oauth2return = req.originalUrl;
    if (
      req.originalUrl !== "/login" &&
      (req.originalUrl.split("/")[1].trim() !== "auth" &&
        req.originalUrl.split("/")[1].trim() !== "static")
    ) {
      return res.redirect("/login");
    }
  }
  next();
}
app.use(authRequired);

// const routes = require("./routes")
const routes = require("./routes")(router, db, passport, process.env.NODE_ENV);
app.use(routes);

app.use(express.static(path.join(__dirname, "client/build")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
