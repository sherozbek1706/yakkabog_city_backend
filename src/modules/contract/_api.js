const router = require("express").Router();
const controller = require("./_controller");
const hasRole = require("./../../shared/auth/_hasRole");
const isLoggedIn = require("./../../shared/auth/_isLoggedIn");
const middleware = require("../admin/middleware");

const mAnyAdmin = [isLoggedIn, hasRole(["admin", "super_admin"]), middleware];

router.post("/add", mAnyAdmin, controller.add);
router.get("/list", mAnyAdmin, controller.list);
router.get("/get/:id", mAnyAdmin, controller.get);
router.post("/pay/", mAnyAdmin, controller.pay);
router.get("/stats-payments/:id", mAnyAdmin, controller.statsPayments);

module.exports = router;
