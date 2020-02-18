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
    },

    new(req, res, next){
        res.render("reports/new");
    },

    create(req, res, next){
        console.log("create called");
        console.log(req.body);
        let newReport = {
            date: req.body.date
        };
        reportQueries.addReport(newReport, (err, report) => {
            if(err){
                res.redirect(500, "/reports/new");
            } else {
                res.redirect(303, `/reports/${report.id}`);
            }
        });
    },

    show(req, res, next){
        reportQueries.getReport(req.params.id, (err, report) => {
            if(err || report == null) {
                res.redirect(404, "/");
            } else {
                res.render("reports/show", {report});
            }
        })
    }
    
}