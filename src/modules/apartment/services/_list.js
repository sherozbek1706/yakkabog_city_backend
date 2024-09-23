const common = require("../../../common");
const { db } = require("../../../db");

module.exports = async ({ query }) => {
  const { block_number = "", entrance = "" } = query;

  const list = db("apartment");

  // Block Number orqali qidirish
  block_number ? list.andWhere({ block_number }) : null;

  // Padyezd bo'yicha qidirish
  entrance ? list.andWhere({ entrance }) : null;

  let data = await list;
  return common.response.list(data);
};
