'use strict';
const mock = require(`../mocks.js`);

const {Router} = require(`express`);

const myRouter = new Router();

myRouter.get(`/`, (req, res) => {
  res.render(`post.pug`, mock.post);
});

module.exports = myRouter;
