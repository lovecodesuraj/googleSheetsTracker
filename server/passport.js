import passport from 'passport';
import GoogleStrategy from "passport-google-oauth20"
import dotenv from "dotenv";
import {google} from "googleapis";
dotenv.config();


var REFRESH_TOKEN="";
var ACCESS_TOKEN="";
const REDIRECT_URI=process.env.REDIRECT_URI;
const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
console.log(GOOGLE_CLIENT_ID)
passport.use(new GoogleStrategy({
  clientID:GOOGLE_CLIENT_ID,
  clientSecret:GOOGLE_CLIENT_SECRET,
  callbackURL: REDIRECT_URI, 
  passReqToCallback: true,
},
function(request, accessToken, refreshToken, profile, done) {
  // process.env.REFRESH_TOKEN=refreshToken;
  // process.env.ACCESS_TOKEN=accessToken;
  // REFRESH_TOKEN=refreshToken;
  // ACCESS_TOKEN=accessToken;
  
  console.log("access token" ,accessToken);
  return done(null, profile);
}));



passport.serializeUser(function(user, done) {
  done(null, user);
});


passport.deserializeUser(function(user, done) {
  done(null, user);
});