const tableName = "flags";

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
  console.log("Creating table: ", tableName);
  return knex.schema.createTable(tableName, (table) => {
    table.increments("id");
    table.string("name").notNullable();
    table.string("description").notNullable();
    table.integer("user_id").unsigned().references("id").inTable("users").onDelete("CASCADE").notNullable();
    table.boolean("enabled").defaultTo(true).notNullable();
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
