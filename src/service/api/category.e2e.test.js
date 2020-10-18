'use strict';

const supertest = require(`supertest`);
const {HttpCode} = require(`../../constants`);
const {createAPI} = require(`../../utils`);
const {CategoryService} = require(`../data-service/index.js`);
const {category} = require(`./category`);
const mock = require(`../../mocks/articles`);

let api;
let res;


beforeAll(async () => {
  api = createAPI();
  category(api, new CategoryService(mock));
});

test(`Status code 200. Get categories`, async () => {
  res = await supertest(api).get(`/category`);
  expect(res.statusCode).toBe(HttpCode.OK);
});
