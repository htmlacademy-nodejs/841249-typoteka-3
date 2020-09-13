'use strict';
const mock = require(`../mocks.js`);

const {Router} = require(`express`);

const searchRouter = new Router();

searchRouter.get(`/`, (req, res) => {
  res.render(`search.pug`, mock.search);
});

module.exports = searchRouter;
