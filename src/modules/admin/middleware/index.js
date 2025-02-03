const { db } = require("../../../db");
const { BadRequestError, ForbiddenError } = require("../../../shared/errors");

module.exports = async (req, res, next) => {
  try {
    let user = req.user;

    const admin = await db("admin")
      .where({ id: user.id, is_deleted: false })
      .first();

    if (!admin) {
      throw new BadRequestError("Admin blokda, iltmos blokdan chiqib kiring.");
    }

    next();
  } catch (error) {
    next(new ForbiddenError(error.message));
  }
};
