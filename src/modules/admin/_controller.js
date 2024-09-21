const express = require("express");
const common = require("../../common");
const services = require("./services");

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.Response} next
 */
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

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.Response} next
 */
const list = async (req, res, next) => {
  await common.controller["middle-function"](
    { res, next },
    services.list,
    {},
    200
  );
};

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.Response} next
 */
const login = async (req, res, next) => {
  await common.controller["middle-function"](
    { res, next },
    services.login,
    { body: req.body },
    200
  );
};

module.exports = {
  add,
  list,
  login,
};
