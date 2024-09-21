const common = require("../../../common");
const { db } = require("../../../db");

module.exports = async ({ params }) => {
  await common.checkings.found(
    "admin",
    { id: params.id, is_deleted: true },
    "Admin"
  );

  return db("admin")
    .where({ id: params.id })
    .update({ is_deleted: false })
    .returning("*");
};
