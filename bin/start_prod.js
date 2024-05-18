#! /usr/bin/env node
import express from "express";
import { createRsbuild, loadConfig } from "@rsbuild/core";
import { initApiRoutes, startServer, initUIRoutes } from "../src/server/index.js";

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
 * @returns {Promise<void>}
 */
async function initStaticServer(app) {
  const rootDir = process.cwd();
  app.use(express.static(`${rootDir}/dist`));
}

await buildFrontend();
await startServer([initApiRoutes, initStaticServer, initUIRoutes]);
