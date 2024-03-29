var express = require("express");
var router = express.Router();
const indexController = require("../controller/indexController");

router.get("/", function (req, res, next) {
  res.json({ message: "colorectalSurgeonServer" });
});

router.get("/service", indexController.getServices);

router.post("/service", indexController.postService);

module.exports = router;
