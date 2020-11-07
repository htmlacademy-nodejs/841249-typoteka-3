'use strict';
const mock = require(`../mocks.js`);
const CreateAPI = require(`../api.js`);
const {Router} = require(`express`);

const articlesRouter = new Router();
const API = new CreateAPI();

articlesRouter.get(`/`, async (req, res) => {
  try {
    const articles = await API.getArticles();
    res.render(`/articles`, articles);
  } catch (err) {
    console.log(err);
  }
});

articlesRouter.get(`/add`, (req, res) => res.render(`new-post.pug`));
articlesRouter.get(`/:id`, (req, res) => res.send(`/articles/:id ${req.params.id}`));
articlesRouter.get(`/edit/:id`, async (req, res) => {
  const id = req.params.id;
  try {
    const article = await API.getArticleById(id);
    const articleMock = mock.post;
    articleMock.article = article;
    res.render(`/articles/edit/${id}`);
  } catch (err) {
    console.log(err);
  }
});

articlesRouter.get(`/category/:id`, (req, res) => res.render(`articles-by-category.pug`, mock.main));


module.exports = articlesRouter;
