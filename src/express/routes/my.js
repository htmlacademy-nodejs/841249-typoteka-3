'use strict';
const mock = require(`../mocks.js`);

const {Router} = require(`express`);

const myRouter = new Router();

myRouter.get(`/`, (req, res) => res.render(`my.pug`, mock.my));
myRouter.get(`/comments`, (req, res) => res.render(`comments.pug`, mock.comments));

module.exports = myRouter;
