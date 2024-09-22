const router = require("express").Router();

const adminRouterApi = require("../modules/admin/_api");
const apartmentRouterApi = require("../modules/apartment/_api");
const contractRouterApi = require("../modules/contract/_api");
const anketaRouterApi = require("../modules/anketa/_api");

router.use("/admin", adminRouterApi);
router.use("/apartment", apartmentRouterApi);
router.use("/contract", contractRouterApi);
router.use("/anketa", anketaRouterApi);

module.exports = router;
