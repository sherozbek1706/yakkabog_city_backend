/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("admin", (table) => {
    table.increments("id").primary();
    table.string("first_name", 64).notNullable();
    table.string("last_name", 64).notNullable();
    table.string("phone_number").notNullable().unique();
    table.enum("role", ["admin", "super_admin"]).defaultTo("admin");
    table.string("username", 64).notNullable().unique();
    table.string("password").notNullable();
    table.boolean("is_deleted").defaultTo(false);
    table.timestamp("created_at").defaultTo(knex.fn.now());
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("admin");
};
