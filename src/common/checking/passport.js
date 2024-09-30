const { BadRequestError } = require("../../shared/errors");
module.exports = (passport) => {
  const regex = /^[A-Z]{2}[0-9]{7}$/;

  if (!regex.test(passport)) {
    throw new BadRequestError("Noto'g'ri pasport formati!");
  }
};
