'use strict';

const faker = require("faker");

let reports = [];

for(let i = 1; i <= 15; i++){
  let newDate = new Date();
  newDate.setHours(0,0,0,0);
  newDate.setFullYear(2020);
  newDate.setMonth(0);
  newDate.setDate(i)
  reports.push({
    date: newDate,
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
