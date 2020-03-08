const blockPullQueries = require("../db/queries.blockPulls.js");

module.exports = {
    new(req, res, next) {
        res.render("blockPulls/new", {reportId: req.params.reportId});
    },

    create(req, res, next) {
        //console.log(req.body);
        let newBlockPull = {
            days: req.body.days,
            blockNumber: req.body.blockNumber,
            reportId: req.params.reportId,
            machine: req.body.machine
        };
        //console.log(newBlockPull);
        blockPullQueries.addBlockPull(newBlockPull, (err, blockPull) => {
            if(err){
                res.redirect(500, "/blockPulls/new");
            } else {
                res.redirect(303, `/reports/${newBlockPull.reportId}`);
            }
        });
    }
};