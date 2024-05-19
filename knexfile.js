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
      filename: "./db.sqlite",
    },
    useNullAsDefault: true,
    seeds,
    migrations,
  },

  production: {
    client: "postgresql",
    connection: {
      host: "unnamed.featureflags.postgres",
      database: "featureflags",
      user: "postgres",
      password: "postgres",
    },
    pool: {
      min: 2,
      max: 10,
    },
    seeds,
    migrations,
  },
};
