"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "webtoons",
      [
        {
          title: "True Beauty",
          genre: "Drama",
          isFavorite: false,
          image: "https://www.forbes.com/sites/joanmacdonald.jpg",
          createdBy: 6
        },
        {
          title: "Age Matters",
          genre: "Romance",
          isFavorite: false,
          image: "https://www.forbes.com/sites/joanmacdonald.jpg",
          createdBy: 6
        },
        {
          title: "A Good Day to be a Dog",
          genre: "Drama",
          isFavorite: true,
          image: "https://www.forbes.com/sites/joanmacdonald.jpg",
          createdBy: 6
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("webtoons", null, {});
  }
};
