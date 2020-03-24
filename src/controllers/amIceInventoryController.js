const amIceInventoryQueries = require("../db/queries.amIceInventories.js");

module.exports = {
    new(req, res, next) {
        res.render("amIceInventories/new", {reportId: req.params.reportId});
    },

    create(req, res, next){
        console.log("amIceInv create called");
        let newAmIceInventory = {
            amount: req.body.amount,
            unit: req.body.unit,
            product: req.body.product,
            reportId: req.params.reportId
        };
        amIceInventoryQueries.addAmIceInventory(newAmIceInventory, (err, amIceInventory) => {
            if(err){
                res.redirect(500, "/amIceInventories/new");
            } else {
                res.redirect(303, `/reports/${newAmIceInventory.reportId}`)
            }
        });
    },

    derstroy(req, res, next){
        amIceInventoryQueries.deleteAmIceInventory(req.params.id, (err, deletedRecordsCount) => {
            if(err){
                res.redirect(500, `/reports/${req.params.reportId}/amIceInventories/new`)
            } else {
                res.redirect(500, `/reports/${req.params.reportdId}`)
            }
        });
    }
}