'use strict';
module.exports = (sequelize, DataTypes) => {
  const News = sequelize.define('News', {
    title: DataTypes.STRING,
    content: DataTypes.STRING
  }, {
    tableName: 'news',
    timestamps: false
  });
  News.associate = function(models) {
    // associations can be defined here
  };
  return News;
};