'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, Sequelize, DataTypes) => {
  class SetTime extends Model {
    static associate({ Band, Event, Stage}) {
      SetTime.belongsTo(Band, {
        foreignKey: 'band_id',
        as: 'band'
      })

      SetTime.belongsTo(Event, {
        foreignKey: 'event_id',
        as: 'event'
      })

      SetTime.belongsTo(Stage, {
        foreignKey: 'stage_id',
        as: 'stage'
      })
    }
  }
  SetTime.init({
    set_time_id: {
      autoIncrement: true,
      primaryKey: true,
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
      modelName: 'SetTime',
      tableName: 'set_time',
      timestamps: false
  });
  return SetTime;
};