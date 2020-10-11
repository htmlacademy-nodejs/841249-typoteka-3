'use strict';

const {Router} = require(`express`);
const {HttpCode} = require(`../../constants`);

const route = new Router();

module.exports.search = (app, service) => {
  app.use(`/search`, route);

  route.get(`/`, (req, res) => {
    const searchQuery = req.query.query;
    const searchResult = service.findAll(searchQuery);

    if (searchResult.length <= 0) {
      return res.status(HttpCode.NOT_FOUND)
        .send(`Not found with ${searchResult}`);
    }

    return res.status(HttpCode.OK)
      .json(searchResult);
  });
};
