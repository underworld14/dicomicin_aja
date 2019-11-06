"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "episodes",
      [
        {
          webtoons_id: 1,
          episode: "Pasutri Gaje 1",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQCBMKFa4pno2AuG9mihACipEDXdojIIrh9cXWQtJ5huI12MPey",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          webtoons_id: 1,
          episode: "Pasutri Gaje 2",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS4HKnVIe2yB41TNHOwqtFnTx91_4onkyOaBW6zDXM9Rkez2kOU",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          webtoons_id: 1,
          episode: "Pasutri Gaje 3",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTkBPVALFt-q1CBvL7hTVjfTJE6eLQzaCOiMoxUbDr3dKePXXUu",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          webtoons_id: 2,
          episode: "Tahi Lalat 1",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTrZXSe5E0MnApOgvsfJroHvu5zQh14LAFgPyCtbrCNbgfo2o4t",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          webtoons_id: 2,
          episode: "Tahi Lalat 2",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQgI4F7M3Qv41X54Z6bxFPTB1pXRUHtKZ0TgCiP2-n1Ol5jx-Y0",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          webtoons_id: 2,
          episode: "Tahi Lalat 3",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQjjLrSdXJb44buhmZjZEvxaIRJ8I0YlqhxoUOBGtj7rLY-7-h8",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          webtoons_id: 3,
          episode: "Boruto 1",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQiKKuSjaVmylCvNXR9Jj-aTZkBeRNy4UmL8Kr7QwEDIw4DEpxw",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          webtoons_id: 3,
          episode: "Boruto 2",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSdLhMbn3UXg6iR9Qhi5qYOrDzWe8PNmT66R-sW1b1fpmzN1nkl",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          webtoons_id: 3,
          episode: "Boruto 3",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQkiK_9mRnMOoHzoiO_aReVpcaiqKbBlCQtJdBuFQb6wzl7NOQ7",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("episodes", null, {});
  }
};
