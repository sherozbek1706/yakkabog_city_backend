const common = require("../../../common");
const { db } = require("../../../db");

module.exports = async () => {
  let list = await db("admin").where({ is_deleted: true });
  return common.response.list(list);
};
