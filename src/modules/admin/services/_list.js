const common = require("../../../common");
const { db } = require("../../../db");

module.exports = async () => {
  let list = await db("admin").select("*");
  return common.response.list(list);
};
