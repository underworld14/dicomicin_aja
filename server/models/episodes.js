"use strict";
module.exports = (sequelize, DataTypes) => {
  const episodes = sequelize.define(
    "episodes",
    {
      webtoons_id: DataTypes.INTEGER,
      episode: DataTypes.STRING,
      image: DataTypes.STRING
    },
    {}
  );
  episodes.associate = function(models) {
    episodes.belongsTo(models.webtoons, {
      as: "toonId",
      foreignKey: "webtoons_id"
    });
  };
  return episodes;
};
