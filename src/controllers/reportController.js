const reportQueries = require("../db/queries.reports.js");

module.exports = {
    index(req, res, next){
        reportQueries.getAllReports((err, reports) => {
            if(err) {
                res.redirect(500, "static/index");
            } else {
                res.render("reports/index", {reports});
            }
        })
    }
}