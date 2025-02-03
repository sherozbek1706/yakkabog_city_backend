const common = require("../../../common");
const { db } = require("../../../db");

module.exports = async () => {
  const list = await db("contract").where({ is_deleted: false });
  return common.response.list(list);
};
