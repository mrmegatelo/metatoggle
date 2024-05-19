import "dotenv/config";
import * as path from "node:path";
import express from "express";
import cors from "cors";
import session from "express-session";
import knexSession from "connect-session-knex";
import passport from "passport";

import db from "../db/index.js";

import flagsRouter from "./services/flags/router.js";
import authRouter from "./services/auth/router.js";
import { SESSION_MAX_AGE } from "./utils/constants.js";

/**
 * Starts the server and initializes the decorators
 * @param decorators
 * @returns {Promise<void>}
 */
export async function startServer(decorators = []) {
  const app = express();
  const port = process.env.API_PORT || 3001;
  const appSessionSecret = process.env.APP_SECRET || "secret";

  const KnexSessionStore = knexSession(session);
  const sessionStore = new KnexSessionStore({ knex: db });

  app.use(
    session({
      store: sessionStore,
      secret: appSessionSecret,
      resave: false,
      saveUninitialized: false,
      name: "session_id",
      cookie: {
        maxAge: SESSION_MAX_AGE,
        httpOnly: false,
      },
    }),
  );
  app.use(passport.authenticate("session"));

  app.use(cors());
  app.use(express.json());

  decorators.forEach((decorator) => {
    decorator(app);
  });

  app.listen(port, () => {
    console.log("Server is running on http://localhost:3001");
  });
}

/**
 * Initializes the API routes
 * @param app
 */
export function initApiRoutes(app) {
  app.get("/api", (req, res) => {
    res.send("API is working!");
  });

  app.use("/api/flags", checkAuth, flagsRouter);
  app.use("/api/auth", authRouter);
}

/**
 * Initializes the UI routes
 * @param app
 */
export function initUIRoutes(app) {
  const sendReactApp = (req, res) => {
    res.sendFile(path.resolve(process.cwd(), "dist/index.html"));
  };
  app.get("*", sendReactApp);
}

function checkAuth(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.status(401).json({ message: "Unauthorized" });
}
