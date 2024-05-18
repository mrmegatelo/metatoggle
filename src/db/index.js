import knex from "knex";
import config from "../../knexfile.js";

export function createKnexClient(env) {
  return knex(config[env]);
}
