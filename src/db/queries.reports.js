const Report = require("./models").Report;

module.exports = {
    getAllReports(callback){
        return Report.findAll()

        .then((reports) => {
            callback(null, reports);
        })
        .catch((err) => {
            callback(err);
        })
    },

    addReport(newReport, callback){
        console.log("object: ", newReport);
        console.log("date: ", newReport.date);
        return Report.create({
            date: newReport.date
        })
        .then((report) => {
            callback(null, report);
        })
        .catch((err) => {
            callback(err);
        })
    },

    getReport(id, callback){
        return Report.findById(id)
        .then((report) => {
            callback(null, report);
        })
        .catch((err) => {
            callback(err);
        })
    }
}