const isLoggedIn = require("../../shared/auth/_isLoggedIn");
const hasRole = require("../../shared/auth/_hasRole");
const middleware = require("../admin/middleware");
const controller = require("./_controller");
const router = require("express").Router();

const mList = [isLoggedIn, hasRole(["super_admin", "admin"]), middleware];
const mSuperList = [isLoggedIn, hasRole(["admin"]), middleware];

router.post("/add", mList, controller.add);
router.get("/list", mList, controller.list);
router.get("/get/:id", mList, controller.get);

module.exports = router;
