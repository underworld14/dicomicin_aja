const jwt = require("jsonwebtoken");

const models = require("../models");
const Users = models.users;
const bcrypt = require("bcrypt");

exports.login = (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  Users.findOne({ where: { email } })
    .then(user => {
      const authorization = bcrypt.compareSync(password, user.password);
      if (authorization) {
        const token = jwt.sign({ id: user.id }, "my-secret-key");
        res.send({
          id: user.id,
          name: user.name,
          login: true,
          token
        });
      } else {
        res.send({
          login: false,
          message: "Wrong Email or Password Invalid !"
        });
      }
    })
    .catch(err => {
      res.send({
        login: false,
        message: "Login Invalid, You are not registered"
      });
    });
};

exports.register = (req, res) => {
  console.log(req.body.password);
  const hashedPassword = bcrypt.hashSync(req.body.password, 8);
  Users.create({
    email: req.body.email,
    password: hashedPassword,
    name: req.body.name
  })
    .then(user => {
      if (user) {
        const token = jwt.sign({ id: user.id }, "my-secret-key");
        res.send({
          id: user.id,
          email: user.email,
          name: user.name,
          register: true,
          token
        });
      }
    })
    .catch(err => {
      res.send({
        register: false,
        err
      });
    });
};
