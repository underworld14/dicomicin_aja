"use strict";
module.exports = (sequelize, DataTypes) => {
  const favorites = sequelize.define(
    "favorites",
    {
      webtoons_id: DataTypes.INTEGER,
      users_id: DataTypes.INTEGER
    },
    {}
  );
  favorites.associate = function(models) {
    favorites.belongsTo(models.webtoons, {
      as: "webtoonsId",
      foreignKey: "webtoons_id"
    });
    favorites.belongsTo(models.users, {
      as: "usersId",
      foreignKey: "users_id"
    });
  };
  return favorites;
};
