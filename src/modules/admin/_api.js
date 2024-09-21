const router = require("express").Router();
const hasRole = require("../../shared/auth/_hasRole");
const isLoggedIn = require("../../shared/auth/_isLoggedIn");
const controller = require("./_controller");

const mSuperList = [isLoggedIn, hasRole(["super_admin"])];
const mList = [isLoggedIn, hasRole(["admin", "super_admin"])];

router.post("/add", mSuperList, controller.add);
router.get("/list", mList, controller.list);
router.post("/login", controller.login);
router.delete("/remove/:id", controller.remove);
router.delete("/unremove/:id", controller.unremove);

module.exports = router;
