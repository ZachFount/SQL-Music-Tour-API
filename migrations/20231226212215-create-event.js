'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('events', {
      event_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        timestamps: false,
        type: Sequelize.INTEGER
      },
      name: {
        timestamps: false,
        allowNull: false,
        type: Sequelize.STRING
      },
      date: {
        timestamps: false,
        allowNull: false,
        type: Sequelize.DATE
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Events');
  }
};