const reportQueries = require("../db/queries.reports.js");

module.exports = {
  index(req, res, next) {
    reportQueries.getAllReports((err, reports) => {
      if (err) {
        console.log(err);
        res.redirect(500, "static/index");
      } else {
        res.render("reports/index", { reports });
      }
    });
  },

  new(req, res, next) {
    res.render("reports/new");
  },

  create(req, res, next) {
    console.log("create called");
    console.log(req.body);
    let newReport = {
      date: req.body.date
    };
    reportQueries.addReport(newReport, (err, report) => {
      if (err) {
        res.redirect(500, "/reports/new");
      } else {
        res.redirect(303, `/reports/${report.id}`);
      }
    });
  },

  show(req, res, next) {
    reportQueries.getReport(req.params.id, (err, report) => {
      if (err || report == null) {
        res.redirect(404, "/");
      } else {
        res.render("reports/show", { report });
      }
    });
  },

  destroy(req, res, next) {
    reportQueries.deleteReport(req.params.id, (err, report) => {
      if (err) {
        res.redirect(500, `/reports/${report.id}`);
      } else {
        res.redirect(303, "/reports");
      }
    });
  },

  edit(req, res, next) {
    reportQueries.getReport(req.params.id, (err, report) => {
      if (err || report == null) {
        res.redirect(404, "/");
      } else {
        res.render("reports/edit", { report });
      }
    });
  },

  update(req, res, next) {
    console.log("report update from controller called");
    reportQueries.updateReport(req.params.id, req.body, (err, report) => {
      if (err || report == null) {
        res.redirect(404, `/reports/${req.params.id}/edit`);
      } else {
        res.redirect(`/reports/${report.id}`);
      }
    });
  }
};
