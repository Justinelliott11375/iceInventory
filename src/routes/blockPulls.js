const express = require("express");
const router = express.Router();

const blockPullController = require("../controllers/blockPullController");

router.get("/reports/:reportId/blockPulls/new", blockPullController.new);
router.post("/reports/:reportId/blockPulls/create", blockPullController.create);

module.exports = router;