const express = require("express");
const router = express.Router();

const reportController = require("../controllers/reportController");

router.get("/reports", reportController.index);
router.get("/reports/new", reportController.new);
router.post("/reports/create", reportController.create);
router.get("/reports/:id", reportController.show);
router.post("/reports/:id/destroy", reportController.destroy);
router.get("/reports/:id/edit", reportController.edit);
router.post("/reports/:id/update", reportController.update);

module.exports = router;