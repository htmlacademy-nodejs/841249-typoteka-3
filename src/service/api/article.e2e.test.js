'use strict';

const supertest = require(`supertest`);
const express = require(`express`);
const {CategoryService, ArticleService, SearchService} = require(`../data-service/index.js`);
const {articles} = require(`./articles`);
const {mock} = require(`../../mocks/articles`);

const createAPI = () => {
  const app = express();
  app.use(express.json());
  articles(app, new ArticleService(mock));
  return app;
};

let res;

beforeAll(async () => {
  const api = createAPI();
  res = await supertest(api).get(`/articles`);
});

test(`Status code 200`, () => expect(res.statusCode).toBe(200));

