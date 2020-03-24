const blockPullQueries = require("../db/queries.blockPulls.js");

module.exports = {
    new(req, res, next) {
        res.render("blockPulls/new", {reportId: req.params.reportId});
    },

    createSingle(req, res, next) {
        //console.log(req.body);
        let newBlockPull = {
            days: req.body.days,
            blockNumber: req.body.blockNumber,
            reportId: req.params.reportId,
            machine: req.body.machine
        };
        //console.log(newBlockPull);
        blockPullQueries.addSingleBlockPull(newBlockPull, (err, blockPull) => {
            if(err){
                res.redirect(500, "/blockPulls/new");
            } else {
                res.redirect(303, `/reports/${newBlockPull.reportId}`);
            }
        });
    },
    createFull(req, res, next) {
        //console.log(req.body);
        let newBlockPullOne = {
            days: req.body.days,
            blockNumber: req.body.blockNumber.concat("A"),
            reportId: req.params.reportId,
            machine: req.body.machine.concat("(left)")
        };
        let newBlockPullTwo = {
            days: req.body.days,
            blockNumber: req.body.blockNumber.concat("B"),
            reportId: req.params.reportId,
            machine: req.body.machine.concat("(right)")
        };
        //console.log(newBlockPull);
        blockPullQueries.addFullBlockPull(newBlockPullOne, newBlockPullTwo, (err, blockPull) => {
            if(err){
                res.redirect(500, "/blockPulls/new");
            } else {
                res.redirect(303, `/reports/${newBlockPullOne.reportId}`);
            }
        });
    },

    show(req, res, next){
        blockPullQueries.getBlockPull(req.params.id, (err, blockPull) => {
            if(err || blockPull == null){
                res.redirect(404, "/");
            } else {
                res.render("blockPulls/show", {blockPull});
            }
        });
    },

    destroy(req, res, next){
        blockPullQueries.deleteBlockPull(req.params.id, (err, deleteRecordsCount) => {
            if(err){
                res.redirect(500, `/reports/${req.params.reportId}/blockPulls/${req.params.id}`)
            } else {
                res.redirect(303, `/reports/${req.params.reportId}`)
            }
        })
    },

    edit(req, res, next){
        blockPullQueries.getBlockPull(req.params.id, (err, blockPull) => {
            if(err || blockPull == null){
                res.redirect(404, "/");
            } else {
                res.render("blockPulls/edit", {blockPull});
            }
        });
    },

    update(req, res, next){
        blockPullQueries.updateBlockPull(req.params.id, req.body, (err, blockPull) => {
          if(err || blockPull == null){
            res.redirect(404, `/reports/${req.params.reportId}/blockPulls/${req.params.id}/edit`);
          } else {
            res.redirect(`/reports/${req.params.reportId}/blockPulls/${req.params.id}`);
          }
        });
      }
};