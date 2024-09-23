const { db } = require("../../../db");

module.exports = async ({ body, user }) => {
  let { id } = user;
  return await db("apartment")
    .insert({ ...body, admin_id: id })
    .returning("*");
};
