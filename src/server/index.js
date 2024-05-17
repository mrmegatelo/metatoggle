import express from 'express';

export async function startServer(decorateServer) {
    const app = express();
    const PORT = 3001;

    app.get('/api', (req, res) => {
        res.send('hello world')
    });

    if (decorateServer) {
        decorateServer(app);
    }

    app.listen(PORT, () => {
        console.log('Server is running on http://localhost:3001');
    });
}

export function initServerRoutes(app) {
    app.get('/api', (req, res) => {
        res.send('hello world')
    });
}