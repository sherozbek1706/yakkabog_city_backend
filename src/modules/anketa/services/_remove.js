const common = require("../../../common");
const { db } = require("../../../db");

module.exports = async ({ params }) => {
  await common.checkings.found(
    "anketa",
    { id: params.id, is_deleted: false },
    "Anketa"
  );

  return db("anketa")
    .where({ id: params.id })
    .update({ is_deleted: true })
    .returning("*");
};
