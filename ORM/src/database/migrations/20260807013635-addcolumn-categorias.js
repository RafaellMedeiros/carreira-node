"use strict";

const { DataTypes } = require("sequelize");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("categorias", "deletedAt", {
      allowNull: true,
      type: DataTypes.DATE
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("categorias", "deletedAt ");
  }
};