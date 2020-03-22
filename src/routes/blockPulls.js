const express = require("express");
const router = express.Router();

const blockPullController = require("../controllers/blockPullController");

router.get("/reports/:reportId/blockPulls/new", blockPullController.new);
router.post("/reports/:reportId/blockPulls/create", blockPullController.create);
router.get("/reports/:reportId/blockPulls/:id", blockPullController.show);
router.post("/reports/:reportId/blockPulls/:id/destroy", blockPullController.destroy);
router.get("/reports/:reportId/blockPulls/:id/edit", blockPullController.edit);

module.exports = router;