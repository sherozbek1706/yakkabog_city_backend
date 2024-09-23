const router = require("express").Router();
const hasRole = require("../../shared/auth/_hasRole");
const isLoggedIn = require("../../shared/auth/_isLoggedIn");
const controller = require("./_controller");

const middleware = require("./middleware");

const mSuperList = [isLoggedIn, hasRole(["super_admin"]), middleware];
const mList = [isLoggedIn, hasRole(["admin", "super_admin"]), middleware];

router.post("/add", mSuperList, controller.add);
router.get("/list", mList, controller.list);
router.post("/login", controller.login);
router.delete("/remove/:id", mSuperList, controller.remove);
router.delete("/unremove/:id", mSuperList, controller.unremove);
router.get("/removed/list", mSuperList, controller.removedList);
router.get("/get/:id", mList, controller.get);

module.exports = router;
