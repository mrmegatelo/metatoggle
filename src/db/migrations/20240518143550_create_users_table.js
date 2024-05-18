const tableName = "users";

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
  console.log("Creating table: ", tableName);
  return knex.schema.createTable(tableName, (table) => {
    table.increments("id");
    table.string("email").unique().notNullable();
    table.string("password").notNullable();
    table.string("login").notNullable();
    table.timestamps(true, true);
  });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down(knex) {
  return knex.schema.dropTable(tableName);
}
