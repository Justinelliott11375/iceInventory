'use strict';
module.exports = (sequelize, DataTypes) => {
  var BlockPull = sequelize.define('BlockPull', {
    days: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    reportId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    blockNumber: {
      type: DataTypes.STRING,
      allowNull: false
    },
    machine: {
      type: DataTypes.STRING,
      allowNull: false
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