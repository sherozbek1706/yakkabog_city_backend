const common = require("../../../common");
const { db } = require("../../../db");

module.exports = async () => {
  const list = await db("apartment").select("*");
  return common.response.list(list);
};
