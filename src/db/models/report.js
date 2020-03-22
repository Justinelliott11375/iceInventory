'use strict';
module.exports = (sequelize, DataTypes) => {
  var Report = sequelize.define('Report', {
    date: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {});
  Report.associate = function(models) {
    // associations can be defined here
    Report.hasMany(models.BlockPull, {
      foreignKey: "reportId",
      as: "blockPulls",
    });

    Report.hasMany(models.AmIceInventory, {
      foreignKey: "reportId",
      as: "amIceInventories",
    })
  };
  return Report;
};