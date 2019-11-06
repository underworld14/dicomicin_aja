"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "webtoons",
      [
        {
          title: "Pasutri Gaje",
          genre: "Drama & Comedy",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR88YOYo2qt8YSVbHO_V_Qz1TWczlMQ9oeKUk4fXcpBVZsmUPBN",
          created_by: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: "Tahi Lalat",
          genre: "Comedy",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRHK3fOHB_2vvgaD9uwpQtPrkXnTTlk4R2gxQlMtHGA0DCZ9Ur3",
          created_by: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: "Boruto",
          genre: "Actions & Drama",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRDSAxvJpktmqYHcl0bjisq7DTt36fcqFD-q6uNBTnx2M5_S6qN",
          created_by: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("webtoons", null, {});
  }
};
