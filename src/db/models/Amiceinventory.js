'use strict';
module.exports = (sequelize, DataTypes) => {
  var AmIceInventory = sequelize.define('AmIceInventory', {
    amount: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    
    unit: {
      type: DataTypes.STRING,
      allowNull: false
    },
    product: {
      type:DataTypes.STRING,
      allowNull: false
    },
    reportId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {});
  AmIceInventory.associate = function(models) {
    // associations can be defined here
    AmIceInventory.belongsTo(models.Report, {
      foreignKey: "reportId",
      onDelete: "CASCADE"
    })
    
  };
  return AmIceInventory;
};