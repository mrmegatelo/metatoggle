#! /usr/bin/env node
import express from 'express';
import {createRsbuild, loadConfig} from '@rsbuild/core';
import {startServer} from "../src/server/index.js";

async function buildAndStartServer() {
    const rootDir = process.cwd();
    const {content: rsbuildConfig} = await loadConfig({cwd: rootDir});
    const rsbuild = await createRsbuild({cwd: rootDir, rsbuildConfig});
    await rsbuild.build();
}

async function initStaticServer(app) {
    const rootDir = process.cwd();
    app.use(express.static(`${rootDir}/dist`));
}

await buildAndStartServer();
await startServer(initStaticServer);