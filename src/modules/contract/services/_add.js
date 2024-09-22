const common = require("../../../common");
const { BadRequestError } = require("../../../shared/errors");

module.exports = async ({ body, user }) => {
  const { phone_number1, phone_number2, passport_series, PINFL } = body;

  // bazi bir tekshirishlar
  common.checkings.phone_number(phone_number1);
  common.checkings.phone_number(phone_number2);
  common.checkings.passport(passport_series);

  if (PINFL.length != 14) {
    throw new BadRequestError("PINFL xato kiritlgan");
  }

  return body;
};
