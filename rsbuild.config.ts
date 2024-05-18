import { defineConfig, loadEnv } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";

const { publicVars } = loadEnv({ prefixes: ['PUBLIC_'] });

export default defineConfig({
  plugins: [pluginReact()],
  html: {
    template: "./public/index.html",
  },
  source: {
    entry: {
      index: "./src/client/index.jsx",
    },
    define: publicVars,
  },
});
