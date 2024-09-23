const common = require("../../../common");

module.exports = async ({ params }) => {
  let found = await common.checkings.found("admin", { id: params.id }, "Admin");
  return found;
};
