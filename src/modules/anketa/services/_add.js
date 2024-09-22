const common = require("../../../common");
const { db } = require("../../../db");
const { BadRequestError } = require("../../../shared/errors");

module.exports = async ({ body }) => {
  const { phone_number1, phone_number2 } = body;

  // bazi bir tekshirishlar
  common.checkings.phone_number(phone_number1);
  common.checkings.phone_number(phone_number2);

  return db("anketa")
    .insert({ ...body })
    .returning("*");
};
