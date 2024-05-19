import { Router } from "express";
import { Strategy as LocalStrategy } from "passport-local";
import passport from "passport";
import { passportAuth, register } from "./handlers.js";

passport.use(new LocalStrategy(passportAuth));
passport.serializeUser(function (user, done) {
  process.nextTick(function () {
    done(null, { id: user.id, username: user.username, email: user.email });
  });
});

passport.deserializeUser(function (user, done) {
  process.nextTick(function () {
    return done(null, user);
  });
});

const router = Router();

router.post("/login", passport.authenticate("local"), (req, res) => {
  res.json({ message: "Success" });
});

router.post("/logout", (req, res) => {
  // TODO - Implement logout
  res.json({ message: "Logout" });
});

router.post("/register", register);

export default router;
