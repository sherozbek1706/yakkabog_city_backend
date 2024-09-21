const router = require("express").Router();
const controller = require("./_controller");

router.post("/add", controller.add);

module.exports = router;
