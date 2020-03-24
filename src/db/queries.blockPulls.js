const Report = require("./models").Report;
const BlockPull = require("./models").BlockPull;

module.exports = {
    
    addSingleBlockPull(newBlockPull, callback){
        //console.log(newBlockPull);
        console.log("addBlockPull called");
        return BlockPull.create(newBlockPull)
        .then((blockPull) => {
            callback(null, blockPull);
        })
        .catch((err) => {
            //console.log(err);
            callback(err);
        })
    },

    addFullBlockPull(newBlockPullOne, newBlockPullTwo, callback){
        //console.log(newBlockPull);
        console.log("addFullBlockPull called");
        return BlockPull.bulkCreate([newBlockPullOne, newBlockPullTwo])
        .then((blockPulls) => {
            callback(null, blockPulls);
        })
        .catch((err) => {
            console.log(err);
            callback(err);
        })
    },

    getBlockPull(id, callback){
        return BlockPull.findByPk(id)
        .then((blockPull) => {
            callback(null, blockPull);
        })
        .catch((err) => {
            callback(err);
        })
    },

    deleteBlockPull(id, callback){
        return BlockPull.destroy({
            where: { id }
        })
        .then((deleteRecordsCount) => {
            callback(null, deleteRecordsCount);
        })
        .catch((err) => {
            console.log(err);
            callback(err);
        })
    },

    updateBlockPull(id, updatedBlockPull, callback){
        return BlockPull.findByPk(id)
        .then((blockPull) => {
            if(!blockPull){
                return callback("Block Pull Record not found");
            }
            blockPull.update(updatedBlockPull, {
                fields: Object.keys(updatedBlockPull)
            })
            .then(() => {
                callback(null, blockPull);
            })
            .catch((err) => {
                callback(err);
            });
        });
    }
}