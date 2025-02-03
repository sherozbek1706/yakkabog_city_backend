const common = require("../../../common");

module.exports = async ({ params }) => {
  const found = await common.checkings.found(
    "apartment",
    { id: params.id },
    "Kvartira"
  );

  return found;
};
