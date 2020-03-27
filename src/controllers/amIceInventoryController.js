const amIceInventoryQueries = require("../db/queries.amIceInventories.js");

module.exports = {
    new(req, res, next) {
        res.render("amIceInventories/new", {reportId: req.params.reportId});
    },

    create(req, res, next){
        console.log("amIceInv create called");
        if(req.body.product == "Other"){
            var productName = req.body.customField;
        } else {
            var productName = req.body.product
        }
        let newAmIceInventory = {
            amount: req.body.amount,
            unit: req.body.unit,
            product: productName,
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

    show(req, res, next){
        console.log("amIceInv show called");
        amIceInventoryQueries.getAmIceInventory(req.params.id, (err, amIceInventory) => {
            if(err || amIceInventory == null){
                res.redirect(404, "/");
            } else {
                res.render("amIceInventories/show", {amIceInventory});
            }
        });
    },

    destroy(req, res, next){
        console.log("amIceInv destroy called");
        amIceInventoryQueries.deleteAmIceInventory(req.params.id, (err, deleteRecordsCount) => {
            if(err){
                res.redirect(500, `/reports/${req.params.reportId}/amIceInventories/new`)
            } else {
                res.redirect(303, `/reports/${req.params.reportId}`)
            }
        });
    },

    edit(req, res, next){
        amIceInventoryQueries.getAmIceInventory(req.params.id, (err, amIceInventory) => {
            if(err || amIceInventory == null){
                res.redirect(404, "/");
            } else {
                res.render("amIceInventories/edit", {amIceInventory});
            }
        });
    },

    update(req, res, next){
        amIceInventoryQueries.updateAmIceInventory(req.params.id, req.body, (err, amIceInventory) => {
            console.log("AmIceInv update called");
          if(err || amIceInventory == null){
            res.redirect(404, `/reports/${req.params.reportId}/amIceInventories/${req.params.id}/edit`);
          } else {
            res.redirect(`/reports/${req.params.reportId}`);
          }
        });
      }

}