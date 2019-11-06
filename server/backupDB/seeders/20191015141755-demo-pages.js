"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "pages",
      [
        {
          episodesId: 1,
          image: "https://www.forbes.com/sites/joanmacdonald.jpg",
          page: "https://www.forbes.com/sites/joanmacdonald.jpg"
        },
        {
          episodesId: 2,
          image: "https://www.forbes.com/sites/joanmacdonald.jpg",
          page: "https://www.forbes.com/sites/joanmacdonald.jpg"
        },
        {
          episodesId: 3,
          image: "https://www.forbes.com/sites/joanmacdonald.jpg",
          page: "https://www.forbes.com/sites/joanmacdonald.jpg"
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("pages", null, {});
  }
};
