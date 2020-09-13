'use strict';
const mock = require(`../mocks.js`);

const {Router} = require(`express`);

const registerRouter = new Router();

registerRouter.get(`/`, (req, res) => {
  res.render(`sign-up.pug`, mock.login);
});

module.exports = registerRouter;
