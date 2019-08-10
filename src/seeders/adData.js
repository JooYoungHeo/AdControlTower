'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('ad', [{
      title: 'FIND YOUR PACE',
      content: '재규어 알아보기',
      active: true
    }, {
      title: 'Galaxy S10',
      content: '주문하기',
      active: true
    }, {
      title: '해태 부라보 콘',
      content: '맛이 더욱 좋아졌어요',
      active: false
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('ad', null, {});
  }
};
