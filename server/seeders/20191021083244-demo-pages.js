"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "pages",
      [
        {
          episodes_id: 1,
          image:
            "https://i.pinimg.com/236x/49/e1/64/49e164eb94b56794198203ece379b2c5.jpg",
          page: "1"
        },
        {
          episodes_id: 2,
          image:
            "https://i.pinimg.com/originals/1f/de/b3/1fdeb3e658d68757c705a2639a072cac.jpg",
          page: "1"
        },
        {
          episodes_id: 3,
          image:
            "https://obs.line-scdn.net/0hY4y-aMYeBhtEVClRxeN5TH4CBXR3OBUYIGJXBRQ6WC9hZxREKmZIdWdUWn9uYEFFKmVKe2RTHSpuY0keemdI/w644",
          page: "1"
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("pages", null, {});
  }
};
