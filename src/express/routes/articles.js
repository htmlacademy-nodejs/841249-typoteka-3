'use strict';
const mock = require(`../mocks.js`);

const {Router} = require(`express`);

const articlesRouter = new Router();

articlesRouter.get(`/`, (req, res) => res.send(`/articles`));
articlesRouter.get(`/add`, (req, res) => res.render(`new-post.pug`));
articlesRouter.get(`/:id`, (req, res) => res.send(`/articles/:id ${req.params.id}`));
articlesRouter.get(`/edit/:id`, (req, res) => res.send(`/articles/edit/:id ${req.params.id}`));
articlesRouter.get(`/category/:id`, (req, res) => {
  res.render(`articles-by-category.pug`, mock.main);
});


module.exports = articlesRouter;
