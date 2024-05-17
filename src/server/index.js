import {createRsbuild, loadConfig} from '@rsbuild/core';
import express from 'express';

async function startServer() {
    const rootDir = process.cwd();
    const {content: rsbuildConfig} = await loadConfig({cwd: rootDir});

    const rsbuild = await createRsbuild({cwd: rootDir, rsbuildConfig});

    const app = express();
    const PORT = 3001;

    const rsbuildServer = await rsbuild.createDevServer();

    app.get('/api', (req, res) => {
        res.send('hello world')
    });

    app.use(rsbuildServer.middlewares);

    app.listen(PORT, () => {
        console.log('Server is running on http://localhost:3001');
    });

    const httpServer = app.listen(rsbuildServer.port, async () => {
        // Notify Rsbuild that the custom server has started
        await rsbuildServer.afterListen();
    });

    // Subscribe to the server's http upgrade event to handle WebSocket upgrades
    httpServer.on('upgrade', rsbuildServer.onHTTPUpgrade);
}

startServer();