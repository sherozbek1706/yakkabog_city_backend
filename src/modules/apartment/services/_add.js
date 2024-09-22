const { db } = require("../../../db");
const { findApartment } = require("../../../shared/function");

module.exports = async ({ body, user }) => {
  let { id } = user;
  let {
    field,
    price_per_square_meter,
    floor,
    entrance,
    number_of_rooms_in_floor,
  } = body;
  let total_price = field * price_per_square_meter;

  return await db("apartment")
    .insert({
      ...body,
      total_price,
      admin_id: id,
      apartment_number: findApartment(
        floor - 1,
        entrance,
        number_of_rooms_in_floor
      ),
    })
    .returning("*");

  return body;
};
