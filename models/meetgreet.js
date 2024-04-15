'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, Sequelize, DataTypes) => {
  class MeetGreet extends Model {
    static associate({ Band, Event }) {
      MeetGreet.belongsTo(Band, {
        foreignKey: 'band_id',
        as: 'band'
      })

      MeetGreet.belongsTo(Event, {
        foreignKey: 'event_id',
        as: 'event'
      })
    }
  }
  MeetGreet.init({
    meet_greet_id: {
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    event_id: {
      allowNull: false,
      type: Sequelize.INTEGER
    },
    start_time: {
      allowNull: false,
      type: Sequelize.DATE
    },
    end_time: {
      allowNull: false,
      type: Sequelize.DATE
    }}, {
      sequelize,
    modelName: 'MeetGreet',
    tableName: 'meet_greets',
    timestamps: false
  });
  return MeetGreet;
};