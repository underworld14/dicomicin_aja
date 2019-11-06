"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "webtoons",
      [
        {
          title: "Tahi Lalats",
          genre: "Comedy",
          image:
            "https://media.skyegrid.id/wp-content/uploads/2018/08/komik-tahilalats_20170608_124932-1600x800.jpg",
          created_by: 1
        },
        {
          title: "Pasutri Gaje",
          genre: "Drama & Comedy",
          image:
            "https://cdn.idntimes.com/content-images/community/2019/03/6d0a9079a454d64fc74322862c0de1ed-66a00b52de00ef98aae34bee81593598_600x400.jpg",
          created_by: 1
        },
        {
          title: "Born From Deadth",
          genre: "Supernatural",
          image:
            "https://raninursasih.files.wordpress.com/2017/07/fa1200995abc2e70743ef2ecce9da95c.jpg?w=1000",
          created_by: 2
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("webtoons", null, {});
  }
};
