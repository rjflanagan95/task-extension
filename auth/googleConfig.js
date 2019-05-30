const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

function extractProfile(profile) {
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
        callbackURL: nodeEnv?"https://nameless-sea-68586.herokuapp.com/auth/google/callback":"http://localhost:3001/auth/google/callback"
      },
      function(accessToken, refreshToken, profile, done) {
        done(null, extractProfile(profile));
      }
    );
  };
  