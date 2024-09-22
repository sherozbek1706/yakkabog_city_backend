/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("anketa", (table) => {
    table.increments("id").primary();
    table.string("full_name", 64).notNullable();
    table.string("phone_number1", 64).notNullable();
    table.string("phone_number2", 64).notNullable();
    table
      .enum("order_payment", ["ipoteka", "nasiya", "tuliq_tulov"])
      .notNullable();
    table.integer("muddatli_tulov_oyi").notNullable();
    table.integer("block_number").notNullable();
    table.integer("entrance").notNullable();
    table.integer("floor").notNullable();
    table.integer("apartment_number").notNullable();
    table.float("field").notNullable();
    table.integer("number_of_rooms").notNullable();
    table.float("price_per_square_meter").notNullable();
    table.float("total_price").notNullable();
    table.float("initial_payment_amount").notNullable();
    table.float("initial_payment_amount_percent").notNullable();
    table.float("qolgan_summa").notNullable();
    table.float("ipoteka_tulovi");
    table.float("ipotekadan_qolgan_tulov");
    table.float("rassrochka").notNullable();
    table.boolean("aksiya").notNullable();
    table.boolean("is_deleted").defaultTo(false);
    table.timestamp("created_at").defaultTo(knex.fn.now());
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("anketa");
};
