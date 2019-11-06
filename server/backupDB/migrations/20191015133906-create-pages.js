"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("pages", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      episodesId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "episodes",
          key: "id"
        },
        onUpdate: "cascade",
        onDelete: "cascade"
      },
      image: {
        allowNull: false,
        type: Sequelize.STRING
      },
      page: {
        allowNull: false,
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("pages");
  }
};
