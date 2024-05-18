import "dotenv/config";
import * as path from "node:path";
import express from "express";
import cors from "cors";

import flagsRouter from "./services/flags/router.js";
import authRouter from "./services/auth/router.js";

/**
 * Starts the server and initializes the decorators
 * @param decorators
 * @returns {Promise<void>}
 */
export async function startServer(decorators = []) {
  const app = express();
  const port = process.env.API_PORT || 3001;

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

  app.use("/api/flags", flagsRouter);
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
