"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "episodes",
      [
        {
          webtoons_id: 1,
          episode: "Eps 1 Opening",
          image:
            "https://scontent-sea1-1.cdninstagram.com/vp/625a0dd962cb1afad204a65f47bf73fa/5DFC30CC/t51.2885-15/sh0.08/e35/s640x640/66377883_1282231408635842_2175570115125759227_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com"
        },
        {
          webtoons_id: 1,
          episode: "Eps 2 The New Adventure",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0Nr0ioPWAWvgzdutUk1DbFltHxaZ17l4aUJbHZLAlY116QoMc"
        },
        {
          webtoons_id: 1,
          episode: "Eps 3 Mind Blown",
          image: "https://comics.tahilalats.com/avatars/avatar-16.png"
        },
        {
          webtoons_id: 2,
          episode: "Eps 1 Pernikahan",
          image:
            "https://i.pinimg.com/originals/0a/7a/77/0a7a77888cfb16ac40c2e1a5ac6673fc.jpg"
        },
        {
          webtoons_id: 2,
          episode: "Eps 2 Kasih Sayang",
          image:
            "https://i.pinimg.com/originals/4b/8c/b5/4b8cb5fdfd014f65086924509da5fdb8.jpg"
        },
        {
          webtoons_id: 2,
          episode: "Eps 3 Malam Pertama",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHyJo7HqhStzIYq7QoT6W6o_RI2vrh0dRNKIempwI5oj9_z30n1A"
        },
        {
          webtoons_id: 3,
          episode: "Eps 1 Opening",
          image:
            "https://pbs.twimg.com/profile_images/745520594775482368/kU2IgSqG_400x400.jpg"
        },
        {
          webtoons_id: 3,
          episode: "Eps 2 Kisah Cinta",
          image:
            "https://i.pinimg.com/originals/ea/6e/2c/ea6e2c6f4ef65a11c0ebb566f11526b9.jpg"
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("episodes", null, {});
  }
};
