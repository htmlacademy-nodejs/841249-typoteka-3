'use strict';

const {category} = require(`./category.js`);
const {offers} = require(`./offers.js`);
const {search} = require(`./search.js`);
const {CategoryService, OfferService, SearchService} = require(`../data-service/index.js`);
const {getMockData} = require(`../lib/get-mock-data.js`);
const {Router} = require(`express`);

const app = new Router();

(async () => {
  const mockData = await getMockData();
  category(app, new CategoryService(mockData));
  offers(app, new OfferService(mockData));
  search(app, new SearchService(mockData));
})();

module.exports = app;
