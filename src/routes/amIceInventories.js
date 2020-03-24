const express = require("express");
const router = express.Router();

const amIceInventoryController = require("../controllers/amIceInventoryController");

router.get("/reports/:reportId/amIceInventories/new", amIceInventoryController.new);
router.post("/reports/:reportId/amIceInventories/create", amIceInventoryController.create);
router.get("/reports/:reportId/amIceInventories/:id/show", amIceInventoryController.show);
router.post("/reports/:reportId/amIceInventories/:id/destroy", amIceInventoryController.destroy);
router.get("/reports/:reportId/amIceInventories/:id/edit", amIceInventoryController.edit);
router.post("/reports/:reportId/amIceInventories/:id/update", amIceInventoryController.update);


module.exports = router;
