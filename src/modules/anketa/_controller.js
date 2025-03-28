const services = require("./services");
const common = require("../../common");

const add = async (req, res, next) => {
  await common.controller["middle-function"](
    { res, next },
    services.add,
    {
      body: req.body,
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

const remove = async (req, res, next) => {
  await common.controller["middle-function"](
    { res, next },
    services.remove,
    { params: req.params },
    200
  );
};

module.exports = { add, list, remove };
