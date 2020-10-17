'use strict';

const supertest = require(`supertest`);
const {HttpCode} = require(`../../constants`);
const {createAPI} = require(`../../utils`);
const {ArticleService} = require(`../data-service/index.js`);
const {articles} = require(`./articles`);
const mock = require(`../../mocks/articles`);

let api;
let res;


beforeAll(async () => {
  api = createAPI();
  articles(api, new ArticleService(mock));
});

test(`Status code 200. Delete article by id`, async () => {
  res = await supertest(api).delete(`/articles/a3Mvqf`);
  expect(res.statusCode).toBe(HttpCode.OK);
});

test(`Status code 200. Edit article by id`, async () => {
  res = await supertest(api).put(`/articles/a3Mvqf`).send({test: 1});
  expect(res.statusCode).toBe(HttpCode.OK);
});

test(`Status code 200. Get all arcitles`, async () => {
  res = await supertest(api).get(`/articles`);
  expect(res.statusCode).toBe(HttpCode.OK);
});

test(`Status code 200. Get article by id`, async () => {
  res = await supertest(api).get(`/articles/a3Mvqf`);
  expect(res.statusCode).toBe(HttpCode.OK);
});

test(`Status code 404. Get article by id`, async () => {
  res = await supertest(api).get(`/articles/qwerty123`);
  expect(res.statusCode).toBe(HttpCode.NOT_FOUND);
});

test(`Status code 200. Delete comment by article by id and comment id`, async () => {
  res = await supertest(api).delete(`/articles/Fg3szY/comments/zcMcsX`);
  expect(res.statusCode).toBe(HttpCode.OK);
});

test(`Status code 200. Add comment by article id`, async () => {
  res = await supertest(api).post(`/articles/Fg3szY/comments`).send({test: 1});
  expect(res.statusCode).toBe(HttpCode.OK);
});

