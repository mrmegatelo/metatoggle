import {defineConfig} from '@rsbuild/core';
import {pluginReact} from '@rsbuild/plugin-react';

export default defineConfig({
    plugins: [pluginReact()],
    html: {
        template: './public/index.html',
    },
    source: {
        entry: {
            index: './src/client/index.jsx',
        },
    }
});