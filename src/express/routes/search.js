'use strict';
const mock = require(`../mocks.js`);
const CreateAPI = require(`../api.js`);
const {Router} = require(`express`);

const searchRouter = new Router();
const API = new CreateAPI();

searchRouter.get(`/`, (req, res) => {
  res.render(`search.pug`, mock.search);
});

searchRouter.post(`/`, async (req, res) => {
  try {
    const query = req.body.query;
    const encoded = encodeURI(query);
    const searchResult = await API.searchArticles(encoded);
    mock.search.results = searchResult;
    res.render(`search.pug`, mock.search);
  } catch (err) {
    console.log(err);
  }

});


module.exports = searchRouter;
