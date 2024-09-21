const common = require("../../../common");
const bcrypt = require("bcryptjs");
const { ForbiddenError } = require("../../../shared/errors");
const jwt = require("jsonwebtoken");
const config = require("../../../shared/config");
module.exports = async ({ body }) => {
  let { username, password } = body;
  let found = await common.checkings.found("admin", { username }, "Username");
  let isCorrectly = await bcrypt.compare(password, found.password);

  if (!isCorrectly) {
    throw new ForbiddenError("Parol xato mumkin emas!");
  }

  let payload = {
    id: found.id,
    role: found.role,
    created_time: new Date(),
  };

  const token = jwt.sign(payload, config.jwt.secret, {
    expiresIn: config.jwt.expirec_in,
  });

  return { token };
};
