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

    getAmIceInventory(id, callback){
        return AmIceInventory.findByPk(id)
        .then((amIceInventory) => {
            callback(null, amIceInventory);
        })
        .catch((err) => {
            callback(err);
        })
    },

    deleteAmIceInventory(id, callback){
        return AmIceInventory.destroy({
            where: { id }
        })
        .then((deleteRecordsCount) => {
            callback(null, deleteRecordsCount);
        })
        .catch((err) => {
            callback(err);
        })
    },

    updateAmIceInventory(id, updatedAmIceInventory, callback){
        return AmIceInventory.findByPk(id)
        .then((amIceInventory) => {
            if(!amIceInventory){
                return callback("Ice Inventory Record not found");
            }
            amIceInventory.update(updatedAmIceInventory, {
                fields: Object.keys(updatedAmIceInventory)
            })
            .then(() => {
                callback(null, amIceInventory);
            })
            .catch((err) => {
                callback(err);
            });
        });
    }

}
