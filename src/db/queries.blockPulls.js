const Report = require("./models").Report;
const BlockPull = require("./models").BlockPull;

module.exports = {
    
    addBlockPull(newBlockPull, callback){
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

    getBlockPull(id, callback){
        return BlockPull.findByPk(id)
        .then((blockPull) => {
          callback(null, blockPull);
        })
        .catch((err) => {
          callback(err);
        })
      }
}