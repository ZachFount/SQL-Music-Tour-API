'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, Sequelize, DataTypes) => {
  class Event extends Model {

    static associate(models) {
    }
  }
  Event.init({event_id: {
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
  }},{
    sequelize,
    modelName: 'Event',
    tableName: 'event',
    timestamps: false
  })
  return Event;
};