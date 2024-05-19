/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function up(knex) {
  return knex.schema.alterTable("users", (table) => {
    table.renameColumn("password", "password_hash");
    table.string("salt").notNullable();
  });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export function down(knex) {
  return knex.schema.alterTable("users", (table) => {
    table.renameColumn("password_hash", "password");
    table.dropColumn("salt");
  });
}
