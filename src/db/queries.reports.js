const Report = require("./models").Report;
const BlockPull = require("./models").BlockPull;
const AmIceInventory = require("./models").AmIceInventory;
const sequelize = require("../../src/db/models/index").sequelize;


module.exports = {
    getAllReports(callback){
        return Report.findAll({
            order: [
                ['date', 'DESC'],
            ]
        })

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
        return Report.findByPk(id, {
            include: [{
                model: BlockPull,
                as: "blockPulls"
            }]
        })

        .then((report) => {
            callback(null, report);
        })
        .catch((err) => {
            console.log(err);
            callback(err);
        })
    },

    deleteReport(id, callback){
        return Report.destroy({
            where: {id}
        })
        .then((report) => {
            callback(null, report);
        })
        .catch((err) => {
            callback(err);
        })
    },

    updateReport(id, updatedReport, callback){
        return Report.findByPk(id)
        .then((report) => {
            if(!report){
                return callback("Report not found");
            }
            report.update(updatedReport, {
                fields: Object.keys(updatedReport)
            })
            .then(() => {
                callback(null, report);
            })
            .catch((err) => {
                callback(err);
            });
        });
    }
}