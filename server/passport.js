import passport from 'passport';
import GoogleStrategy from "passport-google-oauth20"


const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;

passport.use(new GoogleStrategy({
  clientID:"156932329852-bfuv0gikuehcau20l0lkd68eavcg8v1d.apps.googleusercontent.com",
  clientSecret:"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",
  callbackURL: "http://localhost:5000/auth/google/callback",
  passReqToCallback: true,
},
function(request, accessToken, refreshToken, profile, done) {
  return done(null, profile);
}));

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});
