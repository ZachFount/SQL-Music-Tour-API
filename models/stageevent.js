'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, Sequelize, DataTypes) => {
  class StageEvent extends Model {
    static associate(models) {
    }
  }
  StageEvent.init({
    stage_event_id: {
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    event_id: {
      allowNull: false,
      type: Sequelize.INTEGER
    },
    stage_id: {
      allowNull: false,
      type: Sequelize.INTEGER
    }}, {
      sequelize,
      modelName: 'StageEvent',
      tableName: 'stage_events',
      timestamps: false
  });
  return StageEvent;
};