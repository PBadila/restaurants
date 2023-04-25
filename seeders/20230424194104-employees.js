'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('employees', [
      { first_name: 'John', last_name: 'Doe', createdAt: new Date(), updatedAt: new Date() },
      { first_name: 'Jane', last_name: 'Smith', createdAt: new Date(), updatedAt: new Date() }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('employees', null, {});
  }
};

