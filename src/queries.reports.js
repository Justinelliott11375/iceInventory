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
    }
}