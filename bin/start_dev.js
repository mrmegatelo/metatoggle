#!/usr/bin/env nodemon --config nodemon.json
import "dotenv/config";
import { createRsbuild, loadConfig } from "@rsbuild/core";
import { startServer, initApiRoutes } from "../src/server/index.js";

const PORT = process.env.API_PORT;

if (!PORT) {
  console.error("API_PORT is not defined");
  process.exit(1);
}

/**
 * Initializes the Rsbuild development server
 * @param app
 * @param port
 * @returns {Promise<void>}
 */
async function initRSPackDevServer(app, port) {
  const rootDir = process.cwd();
  const { content: rsbuildConfig } = await loadConfig({ cwd: rootDir });
  const rsbuild = await createRsbuild({
    cwd: rootDir,
    rsbuildConfig: {
      ...rsbuildConfig,
      server: {
        port,
      },
    },
  });
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

await startServer([initApiRoutes, initRSPackDevServer], PORT);
