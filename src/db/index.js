import knex from "knex";
import config from "../../knexfile.js";

const database = knex(config[process.env.NODE_ENV]);
export default database;
