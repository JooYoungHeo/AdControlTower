'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('ad_exposure_policy', [{
      start: new Date('1970-01-01 00:00:00+0000'),
      end: new Date('2099-12-31 23:59:59+0000'),
      rate: 0.1,
      level: 1
    }, {
      start: new Date('2019-08-08 00:00:00+0000'),
      end: new Date('2019-08-15 23:59:59+0000'),
      rate: 0.23,
      level: 2
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('ad_exposure_policy', null, {});
  }
};
