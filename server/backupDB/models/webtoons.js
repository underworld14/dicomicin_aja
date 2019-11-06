"use strict";
module.exports = (sequelize, DataTypes) => {
  const webtoons = sequelize.define(
    "webtoons",
    {
      title: DataTypes.STRING,
      genre: DataTypes.STRING,
      isFavorite: DataTypes.BOOLEAN,
      image: DataTypes.STRING,
      createdBy: DataTypes.INTEGER
    },
    {}
  );
  webtoons.associate = function(models) {
    webtoons.belongsTo(models.user, {
      as: "created_by",
      foreignKey: "createdBy"
    });
  };
  return webtoons;
};
