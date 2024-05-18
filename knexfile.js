// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */

const seeds = {
  directory: "./src/db/seeds",
};
const migrations = {
  directory: "./src/db/migrations",
};

export default {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./dev.sqlite3",
    },
    seeds,
    migrations,
  },

  staging: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password",
    },
    pool: {
      min: 2,
      max: 10,
    },
    seeds,
    migrations,
  },

  production: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password",
    },
    pool: {
      min: 2,
      max: 10,
    },
    seeds,
    migrations,
  },
};
