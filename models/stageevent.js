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
    stageId: {
      allowNull: false,
      timestamps: false,
      type: Sequelize.INTEGER
    }}, {
      sequelize,
      modelName: 'StageEvent',
      tableName: 'stage_event',
      timestamps: false
  });
  return StageEvent;
};