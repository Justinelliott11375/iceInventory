const express = require("express");
const router = express.Router();

const amIceInventoryController = require("../controllers/amIceInventoryController");

router.get("/reports/:reportId/amIceInventories/new", amIceInventoryController.new);
router.post("/reports/:reportId/amIceInventories/create", amIceInventoryController.create);

module.exports = router;
