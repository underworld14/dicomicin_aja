"use strict";
module.exports = (sequelize, DataTypes) => {
  const pages = sequelize.define(
    "pages",
    {
      episodes_id: DataTypes.INTEGER,
      image: DataTypes.STRING,
      page: DataTypes.STRING
    },
    {}
  );
  pages.associate = function(models) {
    pages.belongsTo(models.episodes, {
      as: "episodesId",
      foreignKey: "episodes_id"
    });
  };
  return pages;
};
