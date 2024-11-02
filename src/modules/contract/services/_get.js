const common = require("../../../common");

module.exports = async ({ params }) => {
  let found = await common.checkings.found(
    "contract",
    { id: params.id, is_deleted: false },
    "Shartnoma"
  );
  return found;
};
