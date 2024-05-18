#! /usr/bin/env node
import "dotenv/config";
import db from "../src/db/index.js";

console.log("Running migrations...");
await db.migrate.latest();
console.log("Migrations completed successfully!");
process.exit(0);
