const { db } = require("../../db");
const { BadRequestError } = require("../../shared/errors");

module.exports = async (db_table_name, findEl, message) => {
  const exist = await db(db_table_name).where(findEl).first();

  if (!exist) {
    throw new BadRequestError(`${message} topilmadi!`);
  }
  return exist;
};

// Bu commonning vazifasi bizga databazadan malumotni qidirib beradi va topilmasa habar beradi.
