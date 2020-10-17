'use strict';

const supertest = require(`supertest`);
const {HttpCode} = require(`../../constants`);
const {createAPI} = require(`../../utils`);
const {SearchService} = require(`../data-service/index.js`);
const {search} = require(`./search`);
const mock = require(`../../mocks/articles`);

let api;
let res;


beforeAll(async () => {
  api = createAPI();
  search(api, new SearchService(mock));
});

test(`Status code 200. Search by title`, async () => {
  res = await supertest(api).get(`/search?query=${encodeURIComponent(`кресла`)}`);
  expect(res.statusCode).toBe(HttpCode.OK);
});

test(`Status code 200. Search by title`, async () => {
  res = await supertest(api).get(`/search?query=${encodeURIComponent(`sdf456`)}`);
  expect(res.statusCode).toBe(HttpCode.NOT_FOUND);
});
