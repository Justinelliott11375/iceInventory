const express = require("express");
const router = express.Router();

const reportController = require("../controllers/reportController");

router.get("/reports", reportController.index);

module.exports = router;