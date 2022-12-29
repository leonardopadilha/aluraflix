'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('Videos', 'categoriaId',{
        allowNull: false,
        type: Sequelize.INTEGER,
        //references: { model: 'Categorias', key: 'id'}
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('Videos','categoriaId');
  }
};