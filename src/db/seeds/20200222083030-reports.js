'use strict';

const faker = require("faker");

let reports = [];

for(let i = 1; i <= 15; i++){
  reports.push({
    date: faker.date.recent(),
    createdAt: new Date(),
    updatedAt: new Date()
  })
}

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
   return queryInterface.bulkInsert("Reports", reports, {})
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
   return queryInterface.bulkDelete("Reports", null, {});
  }
};
