const common = require("../../../common");
const { db } = require("../../../db");
const { BadRequestError } = require("../../../shared/errors");

module.exports = async ({ body, user }) => {
  const { block_number, apartment_number, floor, number_of_rooms, entrance } =
    body;
  const elem = await db("apartment")
    .where({ block_number, apartment_number, floor, number_of_rooms, entrance })
    .first();

  if (!elem) {
    throw BadRequestError("Xonadon topilmadi! Qaytadan urinib ko'ring!");
  }
  let contact = await db("contract")
    .insert({
      ...body,
      admin_id: user.id,
      apartment_id: elem.id,
    })
    .returning("*");

  await db("apartment")
    .where({ id: elem.id })
    .update({ is_sold: "true" })
    .returning("*");

  return contact;
};
