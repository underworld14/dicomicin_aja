"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "episodes",
      [
        {
          webtoonsid: 1,
          episode: "Episode 1",
          image: "https://www.forbes.com/sites/joanmacdonald.jpg"
        },
        {
          webtoonsid: 2,
          episode: "Episode 1",
          image: "https://www.forbes.com/sites/joanmacdonald.jpg"
        },
        {
          webtoonsid: 3,
          episode: "Episode 1",
          image: "https://www.forbes.com/sites/joanmacdonald.jpg"
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("episodes", null, {});
  }
};
