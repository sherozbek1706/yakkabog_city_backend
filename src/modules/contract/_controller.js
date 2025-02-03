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

const get = async (req, res, next) => {
  await common.controller["middle-function"](
    { res, next },
    services.get,
    {
      params: req.params,
    },
    200
  );
};

const pay = async (req, res, next) => {
  await common.controller["middle-function"](
    { res, next },
    services.pay,
    {
      body: req.body,
    },
    200
  );
};

const statsPayments = async (req, res, next) => {
  await common.controller["middle-function"](
    { res, next },
    services.statsPayments,
    {
      params: req.params,
    },
    200
  );
};

module.exports = { add, list, get, pay, statsPayments };
