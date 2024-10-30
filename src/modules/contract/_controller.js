const services = require("./services");
const common = require("../../common");

const add = async (req, res, next) => {
  await common.controller["middle-function"](
    { res, next },
    services.add,
    {
      body: req.body,
      user: req.user,
    },
    201
  );
};

module.exports = { add };
