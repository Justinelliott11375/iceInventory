const AmIceInventory = require("./models").AmIceInventory;
const Report = require("./models").Report;

module.exports = {
    
    addAmIceInventory(newAmIceInventory, callback){
        return AmIceInventory.create(newAmIceInventory)
        .then((amIceInventory) => {
            callback(null, amIceInventory);
        })
        .catch((err) => {
            console.log(err);
            callback(err);
        })
    },

    deleteAmIceInventory(id, callback){
        return AmIceInventory.destroy({
            where: { id }
        })
        .then((deletedRecordsCount) => {
            callback(null, deletedRecordsCount);
        })
        .catch((err) => {
            callback(err);
        })
    }

}
