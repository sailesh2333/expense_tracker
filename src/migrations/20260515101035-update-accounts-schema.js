'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.renameColumn(
      'accounts',
      'balance',
      'balance_amount'
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.renameColumn(
      'accounts',
      'balance_amount',
      'balance'
    );
  },
};