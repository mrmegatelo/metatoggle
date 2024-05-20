#! /usr/bin/env node
import "dotenv/config";
import express from "express";
import { createRsbuild, loadConfig } from "@rsbuild/core";
import { initApiRoutes, startServer, initUIRoutes } from "../src/server/index.js";

const PORT = process.env.API_PORT;

if (!PORT) {
  console.error("API_PORT is not defined");
  process.exit(1);
}

/**
 * Builds the projects frontend.
 * @returns {Promise<void>}
 */
async function buildFrontend() {
  const rootDir = process.cwd();
  const { content: rsbuildConfig } = await loadConfig({ cwd: rootDir });
  const rsbuild = await createRsbuild({ cwd: rootDir, rsbuildConfig });
  await rsbuild.build();
}

/**
 * Initializes the static server
 * @param app
 * @param port
 * @returns {Promise<void>}
 */
async function initStaticServer(app, port) {
  const rootDir = process.cwd();
  app.use(express.static(`${rootDir}/dist`));
  app.listen(port, () => {
    console.log(`Static server running on http://localhost:${port}`);
  });
}

await buildFrontend();
await startServer([initApiRoutes, initStaticServer, initUIRoutes], PORT);
