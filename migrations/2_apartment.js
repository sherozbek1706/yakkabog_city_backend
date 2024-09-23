/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("apartment", (table) => {
    table.increments("id").primary();
    table.integer("block_number").notNullable();
    table.integer("entrance").notNullable();
    table.integer("floor").notNullable();
    table.integer("apartment_number").notNullable();
    table.float("field").notNullable();
    table.integer("number_of_rooms").notNullable();
    table.float("price_per_square_meter").notNullable();
    table.float("total_price").notNullable();
    table.integer("total_floor").notNullable();
    table.boolean("is_sold").defaultTo(false).notNullable();
    table
      .integer("admin_id")
      .references("id")
      .inTable("admin")
      .onDelete("SET NULL");
    table.timestamp("created_at").defaultTo(knex.fn.now());
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("apartment");
};
