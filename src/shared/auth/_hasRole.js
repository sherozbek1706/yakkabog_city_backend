const express = require("express");
const { ForbiddenError } = require("../errors");

/**
 *
 * @param {express.Request} req
 * @param {express.Response} res
 * @param {express.NextFunction} next
 */

const hasRole = (roles) => {
  return async (req, res, next) => {
    try {
      const { role } = req.user;

      if (!roles.includes(role)) {
        throw new ForbiddenError("Sizda bunday huquq yo'q!");
      }

      next();
    } catch (error) {
      next(error);
    }
  };
};

module.exports = hasRole;
