/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("contract", (table) => {
    table.increments("id").primary();
    table.string("full_name", 64).notNullable();
    table.string("phone_number1", 64).notNullable();
    table.string("phone_number2", 64).notNullable();
    table.enum("role", ["mexmon", "xaridor"]).notNullable();
    table.string("passport_series", 64).notNullable();
    table.float("PINFL", 64).notNullable();
    table
      .integer("admin_id")
      .references("id")
      .inTable("admin")
      .onDelete("SET NULL");
    table
      .integer("apartment_id")
      .references("id")
      .inTable("apartment")
      .onDelete("SET NULL");
    table
      .enum("order_payment", ["ipoteka", "nasiya", "tuliq_tulov"])
      .notNullable();
    table.float("down_payment_amount").notNullable();
    table.enum("payment_method", ["pul", "karta", "perevod"]).notNullable();
    table.float("percent_aksiya").notNullable();
    table.boolean("is_deleted").defaultTo(false);
    table.timestamp("created_at").defaultTo(knex.fn.now());
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("contract");
};
