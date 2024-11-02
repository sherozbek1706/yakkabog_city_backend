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

const list = async (req, res, next) => {
  await common.controller["middle-function"](
    { res, next },
    services.list,
    {},
    200
  );
};

module.exports = { add, list };
