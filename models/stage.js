'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, Sequelize, DataTypes) => {
  class Stage extends Model {
    static associate({ StageEvent, Event, SetTime }) {
      Stage.belongsToMany(Event, {
        foreignKey: 'stage_id',
        as: 'events',
        through: StageEvent
      })

      Stage.hasMany(SetTime, {
        foreignKey: 'stage_id',
        as : 'set_times'
      })
    }
  }
  Stage.init( {stage_id: {
    autoIncrement: true,
    primaryKey: true,
    timestamps: false,
    type: Sequelize.INTEGER
  },
  name: {
    allowNull: false,
    timestamps: false,
    type: Sequelize.STRING
  },
  capacity: {
    allowNull: false,
    timestamps: false,
    type: Sequelize.INTEGER
  }}, {
    sequelize,
    modelName: 'Stage',
    tableName: 'stage',
    timestamps: false
  });
  return Stage;
};