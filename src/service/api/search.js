'use strict';

const {Router} = require(`express`);
const {HttpCode} = require(`../../constants`);
const {getLogger} = require(`../../logger`);
const logger = getLogger();

const route = new Router();

module.exports.search = (app, service) => {
  app.use(`/search`, route);

  route.get(`/`, (req, res) => {
    const searchQuery = req.query.query;
    const searchResult = service.findAll(searchQuery);

    if (searchResult.length <= 0) {
      logger.error(`Doesn't found with status code ${res.statusCode}`);
      return res.status(HttpCode.NOT_FOUND)
        .send(`Not found with ${searchResult}`);
    }

    logger.info(`End request with status code ${res.statusCode}`);
    return res.status(HttpCode.OK)
      .json(searchResult);
  });
};
