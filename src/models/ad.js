'use strict';
module.exports = (sequelize, DataTypes) => {
  const Ad = sequelize.define('Ad', {
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    active: DataTypes.BOOLEAN
  }, {
    tableName: 'ad',
    timestamps: false
  });
  Ad.associate = function(models) {
    // associations can be defined here
  };
  return Ad;
};