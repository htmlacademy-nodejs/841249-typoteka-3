'use strict';
const mock = require(`../mocks.js`);

const {Router} = require(`express`);

const loginRouter = new Router();

loginRouter.get(`/`, (req, res) => {
  res.render(`login.pug`, mock.login);
});

module.exports = loginRouter;
