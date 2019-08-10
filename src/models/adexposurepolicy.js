'use strict';
module.exports = (sequelize, DataTypes) => {
  const AdExposurePolicy = sequelize.define('AdExposurePolicy', {
    start: DataTypes.DATE,
    end: DataTypes.DATE,
    rate: DataTypes.DECIMAL(4,3),
    level: DataTypes.TINYINT
  }, {
    tableName: 'ad_exposure_policy',
    timestamps: false
  });
  AdExposurePolicy.associate = function(models) {
    // associations can be defined here
  };
  return AdExposurePolicy;
};