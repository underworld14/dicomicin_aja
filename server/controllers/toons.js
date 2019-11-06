const models = require("../models");
const Toons = models.webtoons;
const Favorites = models.favorites;
const Users = models.users;
const Episodes = models.episodes;
const Pages = models.pages;

// get all toons by title
const getToonsByTitle = (data, title) => {
  const input = data.filter(item => {
    return item.title.toLowerCase().includes(title.toLowerCase());
  });
  let newData = input.map(item => {
    let newItem = {
      title: item.title,
      genre: item.genre,
      isFavorite: item.isFavorite,
      image: item.image,
      createdAt: item.createdAt,
      updatedAt: item.updatedAt,
      createdBy: item.createdBy.id
    };
    return newItem;
  });
  return newData;
};

exports.show = (req, res) => {
  Toons.findAll({
    include: {
      model: Users,
      as: "createdBy",
      attributes: {
        exclude: ["password", "createdAt", "updatedAt"]
      }
    }
  }).then(data => {
    let newData;

    if (req.query.title) {
      newData = getToonsByTitle(data, req.query.title);
    } else {
      newData = data;
    }
    res.send(newData);
  });
};

exports.showid = (req, res) => {
  Toons.findOne({ where: { id: req.params.id } }).then(data => res.send(data));
};

exports.episode = (req, res) => {
  const id = req.params.toon_id;
  Episodes.findAll({
    where: { webtoons_id: id }
  }).then(data => {
    res.send(data);
  });
};

exports.detailEpisode = (req, res) => {
  const toonsId = req.params.toon_id;
  const epsId = req.params.eps_id;

  Pages.findAll({
    include: [
      {
        model: Episodes,
        as: "episodesId",
        where: { webtoons_id: toonsId, id: epsId },
        attributes: []
      }
    ],
    attributes: {
      exclude: ["id", "episodesId"]
    }
  }).then(data => {
    res.send(data);
  });
};

exports.getCreatedToons = (req, res) => {
  const user_id = req.params.user_id;

  Toons.findAll({
    where: { created_by: user_id },
    attributes: {
      exclude: ["createdAt", "updatedAt"]
    }
  }).then(data => res.send(data));
};

exports.storeCreatedToons = (req, res) => {
  const user_id = req.params.user_id;

  Toons.create({
    title: req.body.title,
    genre: req.body.genre,
    image: req.body.image,
    created_by: user_id
  }).then(data => res.send(data));
};

exports.showEpsCreatedUser = (req, res) => {
  const userId = req.params.user_id;
  const toonId = req.params.toon_id;

  Episodes.findAll({
    include: [
      {
        model: Toons,
        as: "toonId",
        where: { created_by: userId, id: toonId },
        attributes: {
          exclude: ["id", "image", "createdAt", "updatedAt"]
        }
      }
    ],
    attributes: { exclude: ["id", "webtoons_id"] }
  }).then(data => {
    res.send(data);
  });
};

exports.getFavorites = (req, res) => {
  const userId = req.params.user_id;

  Favorites.findAll({
    where: { users_id: userId },
    attributes: {
      exclude: ["createdAt", "updatedAt"]
    },
    include: {
      model: Toons,
      as: "webtoonsId",
      attributes: {
        exclude: ["id", "createdAt", "updatedAt"]
      }
    }
  }).then(data => {
    res.send(data);
  });
};

exports.updateMyToon = (req, res) => {
  const userId = req.params.user_id;
  const toonId = req.params.toon_id;

  Toons.update(
    {
      title: req.body.title,
      genre: req.body.genre,
      image: req.body.image
    },
    {
      where: { created_by: userId, id: toonId }
    }
  )
    .then(data => {
      console.log(data);
      res.send({
        update: true,
        Message: "Data Has been Update !",
        data
      });
    })
    .catch(err => {
      res.send({
        update: false,
        Message: "Data invalid !"
      });
    });
};

exports.deleteMyToon = (req, res) => {
  const userId = req.params.user_id;
  const toonId = req.params.toon_id;
  Toons.destroy({
    where: { created_by: userId, id: toonId }
  })
    .then(data => {
      res.send({
        delete: true
      });
    })
    .catch(err => {
      res.send({
        delete: false
      });
    });
};

exports.createEpsToon = (req, res) => {
  const userId = req.params.user_id;
  const toonId = req.params.toon_id;

  Toons.findAll({
    where: { created_by: userId, id: toonId }
  }).then(items => {
    if (items.length > 0) {
      Episodes.create({
        webtoons_id: toonId,
        episode: req.body.episode,
        image: req.body.image
      }).then(data => {
        res.send(data);
      });
    } else {
      res.send({
        Message: "Error Request !!"
      });
    }
  });
};

exports.showImgEPs = (req, res) => {
  const userId = req.params.user_id;
  const toonId = req.params.toon_id;
  const epsId = req.params.eps_id;

  Pages.findAll({
    include: [
      {
        model: Episodes,
        as: "episodesId",
        where: { webtoons_id: toonId, id: epsId },
        attributes: [],
        include: [
          {
            model: Toons,
            as: "toonId",
            where: { created_by: userId, id: toonId },
            attributes: []
          }
        ]
      }
    ],
    attributes: ["id", "image", "page"]
  }).then(data => {
    res.send(data);
  });
};

exports.updateMyEps = (req, res) => {
  const userId = req.params.user_id;
  const toonId = req.params.toon_id;
  const epsId = req.params.eps_id;

  Toons.findAll({
    where: { created_by: userId, id: toonId }
  }).then(data => {
    if (data.length > 0) {
      Episodes.update(
        {
          episode: req.body.episode,
          image: req.body.image
        },
        {
          where: { webtoons_id: toonId, id: epsId }
        }
      ).then(input => {
        res.send({
          update: true,
          Message: "Update Succesfull !!",
          input
        });
      });
    } else {
      res.send({
        update: false,
        Message: "Error Request !!"
      });
    }
  });
};

exports.deleteMyEps = (req, res) => {
  const userId = req.params.user_id;
  const toonId = req.params.toon_id;
  const epsId = req.params.eps_id;

  Toons.findAll({
    where: { created_by: userId, id: toonId }
  }).then(data => {
    if (data.length > 0) {
      Episodes.destroy({
        where: { webtoons_id: toonId, id: epsId }
      })
        .then(deleted => {
          res.send({
            delete: true,
            Message: "delete succesfull !"
          });
        })
        .catch(err => {
          res.send({
            delete: false,
            Message: "delete invalid !"
          });
        });
    } else {
      res.send({
        delete: false,
        Message: "Cannot find the Episodes !"
      });
    }
  });
};

exports.createImgEps = (req, res) => {
  const userId = req.params.user_id;
  const toonId = req.params.toon_id;
  const epsId = req.params.eps_id;

  Episodes.findAll({
    include: [
      {
        model: Toons,
        as: "toonId",
        where: { created_by: userId, id: toonId },
        attributes: []
      }
    ],
    where: { webtoons_id: toonId, id: epsId }
  }).then(items => {
    if (items.length > 0) {
      Pages.create({
        episodes_id: epsId,
        page: req.body.page,
        image: req.body.image
      }).then(data => {
        res.send({
          create: true,
          data
        });
      });
    } else {
      res.send({
        create: false,
        Message: "Error request !!"
      });
    }
  });
};

exports.deleteImgEps = (req, res) => {
  const userId = req.params.user_id;
  const toonId = req.params.toon_id;
  const epsId = req.params.eps_id;
  const imgId = req.params.img_id;

  Pages.findAll({
    include: [
      {
        model: Episodes,
        as: "episodesId",
        where: { webtoons_id: toonId, id: epsId },
        attributes: [],
        include: [
          {
            model: Toons,
            as: "toonId",
            where: { created_by: userId, id: toonId },
            attributes: []
          }
        ]
      }
    ]
  }).then(items => {
    if (items.length > 0) {
      Pages.destroy({
        where: { episodes_id: epsId, id: imgId }
      }).then(deleted => {
        res.send({
          delete: true,
          Message: "Delete Succesfull !!"
        });
      });
    } else {
      res.send({
        delete: false,
        Message: "Delete Invalid"
      });
    }
  });
};
