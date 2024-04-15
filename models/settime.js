'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, Sequelize, DataTypes) => {
  class SetTime extends Model {

    static associate(models) {
    }
  }
  SetTime.init({
    set_time_id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
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
      modelName: 'SetTime',
      tableName: 'set_time',
      timestamps: false
  });
  return SetTime;
};