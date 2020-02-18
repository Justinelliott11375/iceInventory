'use strict';
module.exports = (sequelize, DataTypes) => {
  var Report = sequelize.define('Report', {
    date: DataTypes.DATE
  }, {});
  Report.associate = function(models) {
    // associations can be defined here
    Report.hasMany(models.BlockPull, {
      foreignKey: "reportId",
      as: "blockPulls",
    });
  };
  return Report;
};