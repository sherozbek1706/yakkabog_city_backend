const router = require("express").Router();

const adminRouterApi = require("../modules/admin/_api");
const apartmentRouterApi = require("../modules/apartment/_api");

router.use("/admin", adminRouterApi);
router.use("/apartment", apartmentRouterApi);

module.exports = router;
