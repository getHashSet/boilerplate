const router = require("express").Router();
const apiController = require("./api.controller");

router.use("/api", apiController);

module.exports = router;