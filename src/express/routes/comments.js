'use strict';
const mock = require(`../mocks.js`);

const {Router} = require(`express`);

const commentsRouter = new Router();

commentsRouter.get(`/`, (req, res) => {
  res.render(`comments.pug`, mock.comments);
});

module.exports = commentsRouter;
