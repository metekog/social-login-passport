const GoogleStrategy = require("passport-google-oauth20").Strategy;
const GithubStrategy = require("passport-github2").Strategy;
const FacebookStrategy = require("passport-github2").Strategy;
const passport = require("passport");

const GOOGLE_CLIENT_ID =
  "196813952562-a9ojra8s4qs577tribaqfhagbrraa8k8.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

const GITHUB_CLIENT_ID = "e2e90001bc69400c9f86";
const GITHUB_CLIENT_SECRET = "3c1afb7bd23d896fa1724f00742c57d93faa5875";

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

passport.use(
  new GithubStrategy(
    {
      clientID: GITHUB_CLIENT_ID,
      clientSecret: GITHUB_CLIENT_SECRET,
      callbackURL: "/auth/github/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

/* 
//Need SSL certificate
passport.use(
  new FacebookStrategy(
    {
      clientID: GITHUB_CLIENT_ID,
      clientSecret: GITHUB_CLIENT_SECRET,
      callbackURL: "/auth/github/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
); */

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
