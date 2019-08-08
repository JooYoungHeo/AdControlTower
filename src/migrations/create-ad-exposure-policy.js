'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('ad_exposure_policy', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      start: {
        allowNull: false,
        type: Sequelize.DATE
      },
      end: {
        allowNull: false,
        type: Sequelize.DATE
      },
      rate: {
        allowNull: false,
        defaultValue: 0.000,
        type: Sequelize.DECIMAL(4,3)
      },
      level: {
        allowNull: false,
        defaultValue: 2,
        type: Sequelize.TINYINT(3).UNSIGNED
      }
    }).then(() => {
      queryInterface.addIndex('ad_exposure_policy', ['start']);
      queryInterface.addIndex('ad_exposure_policy', ['end']);
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('ad_exposure_policy');
  }
};