const { db } = require("../../../db");

module.exports = async ({ body, user }) => {
  let { id } = user;
  let { field, price_per_square_meter } = body;
  let total_price = field * price_per_square_meter;
  return await db("apartment")
    .insert({ ...body, total_price, admin_id: id })
    .returning("*");
};
