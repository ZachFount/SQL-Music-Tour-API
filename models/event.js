'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, Sequelize, DataTypes) => {
  class Event extends Model {
    static associate({ Stage, StageEvent, SetTime, MeetGreet }) {
      Event.belongsToMany( Stage, {
        foreignkey: 'event_id', 
        as: 'stages',
        through: StageEvent
      })

      Event.hasMany(MeetGreet, {
        foreignKey: 'event_id',
        as : 'meet_greets'
      })

      Event.hasMany(SetTime, {
        foreignKey: 'event_id',
        as : 'set_times'
      })
    }
  }
  Event.init(
    {event_id: {
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  },
  name: {
    allowNull: false,
    type: Sequelize.STRING
  },
  date: {
    allowNull: false,
    type: Sequelize.DATE
  }},{
    sequelize,
    modelName: 'Event',
    tableName: 'events',
    timestamps: false
  })
  return Event;
};