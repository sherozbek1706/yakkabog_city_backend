/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("contract", (table) => {
    table.increments("id").primary();
    table.string("fullName", 64).notNullable();
    table.string("phone_number1", 64).notNullable();
    table.string("phone_number2", 64).notNullable();
    table.string("seria", 64).notNullable();
    table.string("pinfl", 64).notNullable();
    table.text("address").notNullable();
    table.string("birtday", 64).notNullable();
    table.string("give_pass_date", 64).notNullable();
    table.string("pass_amal_qil_mud", 64).notNullable();
    table.string("pass_ber_joy", 64).notNullable();
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
    table.float("initial_payment_amount").notNullable();
    table.float("initial_payment_amount_percent").notNullable();
    table.float("umumiy_summa").notNullable();
    table.integer("muddatli_tulov_oyi").notNullable();
    table.float("metr_kvadrati_puli").notNullable();
    table.float("qolgan_summa").notNullable();
    table.float("ipoteka_tulovi");
    table.float("ipotekadan_qolgan_tulov");
    table.float("umumiy_tulangan_summa").notNullable();
    // table.float("chegirma_summa").notNullable();
    table.float("oyiga_qanchadan_tushadi").notNullable();
    table.jsonb("oylik_tulovlar").notNullable().defaultTo("[]");
    // table.enum("payment_method", ["pul", "karta", "perevod"]).notNullable();
    table.boolean("aksiya").notNullable();

    table.integer("block_number").notNullable();
    table.integer("entrance").notNullable();
    table.integer("floor").notNullable();
    table.integer("apartment_number").notNullable();
    table.float("field").notNullable();
    table.integer("number_of_rooms").notNullable();

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
