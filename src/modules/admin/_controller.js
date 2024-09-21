const express = require("express");
const common = require("../../common");
const services = require("./services");

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

module.exports = {
  add,
  list,
};
