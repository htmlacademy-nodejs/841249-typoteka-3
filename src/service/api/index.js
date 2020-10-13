'use strict';

const {category} = require(`./category.js`);
const {articles} = require(`./articles.js`);
const {search} = require(`./search.js`);
const {CategoryService, ArticleService, SearchService} = require(`../data-service/index.js`);
const {getMockData} = require(`../lib/get-mock-data.js`);
const {Router} = require(`express`);

const app = new Router();

(async () => {
  const mockData = await getMockData();
  category(app, new CategoryService(mockData));
  articles(app, new ArticleService(mockData));
  search(app, new SearchService(mockData));
})();

module.exports = app;
