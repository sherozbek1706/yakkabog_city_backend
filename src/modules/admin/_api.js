const router = require("express").Router();
const controller = require("./_controller");

router.post("/add", controller.add);
router.get("/list", controller.list);
router.post("/login", controller.login);

module.exports = router;
