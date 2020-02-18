'use strict';
module.exports = (sequelize, DataTypes) => {
  var BlockPull = sequelize.define('BlockPull', {
    blocks: DataTypes.FLOAT,
    days: DataTypes.FLOAT,
    reportId: {
      type: DataTypes.INTEGER,
      onDelete: "CASCADE",
      references: {
        model: "Reports",
        key: "id",
        as: "reportId",
      }
    }
  }, {});
  BlockPull.associate = function(models) {
    // associations can be defined here
    BlockPull.belongsTo(models.Report, {
      foreignKey: "reportId",
      onDelete: "CASCADE",
    })
  };
  return BlockPull;
};