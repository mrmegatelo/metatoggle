#!/usr/bin/env nodemon --config nodemon.json
import { createRsbuild, loadConfig } from "@rsbuild/core";
import { startServer, initApiRoutes } from "../src/server/index.js";

/**
 * Initializes the Rsbuild development server
 * @param app
 * @returns {Promise<void>}
 */
async function initRSPackDevServer(app) {
  const rootDir = process.cwd();
  const { content: rsbuildConfig } = await loadConfig({ cwd: rootDir });
  const rsbuild = await createRsbuild({ cwd: rootDir, rsbuildConfig });
  const rsbuildServer = await rsbuild.createDevServer();
  console.log("Running dev server...");
  app.use(rsbuildServer.middlewares);

  const httpServer = app.listen(rsbuildServer.port, async () => {
    // Notify Rsbuild that the custom server has started
    await rsbuildServer.afterListen();
  });

  // Subscribe to the server's http upgrade event to handle WebSocket upgrades
  httpServer.on("upgrade", rsbuildServer.onHTTPUpgrade);
}

await startServer([initApiRoutes, initRSPackDevServer]);