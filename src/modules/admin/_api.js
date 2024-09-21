const router = require("express").Router();
const controller = require("./_controller");

router.post("/add", controller.add);
router.get("/list", controller.list);

module.exports = router;
