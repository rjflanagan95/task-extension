const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

function extractProfile(profile) {
    console.log("extracting profile...");
    return {
      id: profile.id,
      name: profile.displayName
    };
  }
  
  module.exports = function(db, nodeEnv) {
    return new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: "http://localhost:3001/auth/google/callback"
      },
      function(accessToken, refreshToken, profile, done) {
        done(null, extractProfile(profile));
      }
    );
  };
  