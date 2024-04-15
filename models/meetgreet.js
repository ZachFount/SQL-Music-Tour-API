'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, Sequelize, DataTypes) => {
  class MeetGreet extends Model {

    static associate(models) {
    }
  }
  MeetGreet.init({
    meet_greet_id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      timestamps: false,
      type: Sequelize.INTEGER
    },
    eventId: {
      allowNull: false,
      timestamps: false,
      type: Sequelize.INTEGER
    },
    startTime: {
      allowNull: false,
      timestamps: false,
      type: Sequelize.DATE
    },
    endTime: {
      allowNull: false,
      timestamps: false,
      type: Sequelize.DATE
    }}, {
      sequelize,
    modelName: 'MeetGreet',
    tableName: 'meet_greet',
    timestamps: false
  });
  return MeetGreet;
};