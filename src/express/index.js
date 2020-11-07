'use strict';
const path = require(`path`);
const express = require(`express`);
const registerRouter = require(`./routes/sign-up.pug.js`);
const loginRouter = require(`./routes/login.js`);
const myRouter = require(`./routes/my.js`);
const articlesRouter = require(`./routes/articles.js`);
const categoriesRouter = require(`./routes/categories.js`);
const searchRouter = require(`./routes/search.js`);
const postRouter = require(`./routes/post.js`);
const mock = require(`./mocks.js`);
const CreateAPI = require(`./api.js`);

const app = express();
const DEFAULT_PORT = 8080;
const templates = path.resolve(__dirname, `./templates`);
const publics = path.resolve(__dirname, `./public`);
app.set(`views`, templates);
app.set(`view engine`, `pug`);
app.use(express.static(publics));

const apiServer = new CreateAPI();

app.get(`/`, async (req, res) => {
  try {
    const articles = await apiServer.getArticles();
    mock.main.articles = articles;
    res.render(`main.pug`, mock.main);
  } catch (err) {
    console.log(err);
  }
});
app.get(`/400`, (req, res) => {
  res.render(`errors/400.pug`);
});
app.get(`/500`, (req, res) => {
  res.render(`errors/500.pug`);
});
app.use(`/register`, registerRouter);
app.use(`/login`, loginRouter);
app.use(`/my`, myRouter);
app.use(`/articles`, articlesRouter);
app.use(`/categories`, categoriesRouter);
app.use(`/search`, searchRouter);
app.use(`/post`, postRouter);


app.listen(DEFAULT_PORT);
