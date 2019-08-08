'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('news', [{
      title: '손흥민, 매체 선정 프리미어리그 윙어 5위',
      content: '손흥민이 미국 매체 "NBC 스포츠"가 개막을 앞두고 선정한 잉글리시 프리미어리그(EPL) 윙어 부문 TOP10에 5위로 이름을 올렸다. 손흥민은 모하메드 살라-라힘 스털링-베르나르두 실바-사디오 마네 등 쟁쟁한 선수들의 뒤를 이어 다섯 번째로 선정됐다.'
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('news', null, {});
  }
};
