const router = require("express").Router();
const db = require("../models");

router.route("/").get(function (req, res) {
  res.send({ msg: "hello world" });
});

module.exports = router;
