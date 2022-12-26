'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Videos', [{
      titulo: 'Santo (Ao Vivo) - DROPS, Theo Rubia',
      descricao: "Louvor",
      url : "https://www.youtube.com/watch?v=0L9bSV7HGPw",
      createdAt : new Date(),
      updatedAt : new Date()
    }], {});
   
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Videos', null, {});
  }
};
