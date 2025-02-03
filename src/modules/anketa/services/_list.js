const common = require("../../../common");
const { db } = require("../../../db");

module.exports = async () => {
  let list = await db("anketa").where({ is_deleted: false }).select("*");
  list = list.reverse();
  return common.response.list(list);
};
