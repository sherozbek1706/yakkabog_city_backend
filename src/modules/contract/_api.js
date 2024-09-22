const router = require("express").Router();
const controller = require("./_controller");
const hasRole = require("./../../shared/auth/_hasRole");
const isLoggedIn = require("./../../shared/auth/_isLoggedIn");
const middleware = require("../admin/middleware");

const mAnyAdmin = [isLoggedIn, hasRole(["admin", "super_admin"]), middleware];

router.post("/add", mAnyAdmin, controller.add);

module.exports = router;
