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
    }
}