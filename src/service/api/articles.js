'use strict';

const {Router} = require(`express`);
const {HttpCode} = require(`../../constants`);

const {getLogger} = require(`../../logger`);
const logger = getLogger();

const route = new Router();

module.exports.articles = (app, service) => {
  app.use(`/articles`, route);

  route.get(`/`, (req, res) => {
    const articles = service.findAll();
    res.status(HttpCode.OK)
      .json(articles);

    logger.info(`End request with status code ${res.statusCode}`);
  });

  route.get(`/:articleId`, (req, res) => {
    const {articleId} = req.params;
    const article = service.findOne(articleId);

    if (!article) {
      logger.error(`Article ${articleId} not found with ${res.statusCode} code`);
      return res.status(HttpCode.NOT_FOUND)
        .send(`Not found with ${articleId}`);
    }

    logger.info(`End request with status code ${res.statusCode}`);
    return res.status(HttpCode.OK)
        .json(article);
  });

  route.get(`/:articleId/comments`, (req, res) => {
    const {articleId} = req.params;
    const comments = service.findOneComments(articleId);

    if (!comments) {
      logger.error(`Comments by article ID ${articleId} not found with ${res.statusCode} code`);
      return res.status(HttpCode.NOT_FOUND)
        .send(`Not found with ${articleId}`);
    }

    logger.info(`End request with status code ${res.statusCode}`);
    return res.status(HttpCode.OK)
        .json(comments);
  });

  route.post(`/`, (req, res) => {
    const body = req.body;
    const newArticles = service.addArticle(body);
    logger.info(`End request with status code ${res.statusCode}`);
    res.status(HttpCode.OK)
      .json(newArticles);
  });

  route.put(`/:articleId`, (req, res) => {
    const {articleId} = req.params;
    const body = req.body;
    const newarticles = service.editArticle(articleId, body);
    logger.info(`End request with status code ${res.statusCode}`);
    res.status(HttpCode.OK)
      .json(newarticles);
  });

  route.delete(`/:articleId/comments/:commentId`, (req, res) => {
    const {articleId, commentId} = req.params;
    const newarticles = service.deleteComment(articleId, commentId);
    logger.info(`End request with status code ${res.statusCode}`);
    res.status(HttpCode.OK)
      .json(newarticles);
  });

  route.delete(`/:articleId`, (req, res) => {
    const {articleId} = req.params;
    const newarticles = service.deleteArticle(articleId);
    logger.info(`End request with status code ${res.statusCode}`);
    res.status(HttpCode.OK)
      .json(newarticles);
  });

  route.post(`/:articleId/comments`, (req, res) => {
    const {articleId} = req.params;
    const body = req.body;
    const newarticles = service.addComment(articleId, body);
    logger.info(`End request with status code ${res.statusCode}`);
    res.status(HttpCode.OK)
      .json(newarticles);
  });
};
