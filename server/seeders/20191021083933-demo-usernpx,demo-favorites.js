"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "favorites",
      [
        {
          webtoons_id: "1",
          users_id: "1",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          webtoons_id: "3",
          users_id: "1",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          webtoons_id: "2",
          users_id: "2",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          webtoons_id: "3",
          users_id: "2",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          webtoons_id: "1",
          users_id: "3",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          webtoons_id: "2",
          users_id: "3",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          webtoons_id: "3",
          users_id: "3",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("favorites", null, {});
  }
};
