'use strict';
const path = require(`path`);
const express = require(`express`);
const registerRouter = require(`./routes/register.js`);
const loginRouter = require(`./routes/login.js`);
const myRouter = require(`./routes/my.js`);
const articlesRouter = require(`./routes/articles.js`);
const categoriesRouter = require(`./routes/categories.js`);
const searchRouter = require(`./routes/search.js`);

const app = express();
const DEFAULT_PORT = 8080;
const templates = path.resolve(`./templates`);
app.set(`views`, templates);
app.set(`view engine`, `pug`);

app.get(`/`, (req, res) => {
  res.render(`main.pug`);
});
app.use(`/register`, registerRouter);
app.use(`/login`, loginRouter);
app.use(`/my`, myRouter);
app.use(`/articles`, articlesRouter);
app.use(`/categories`, categoriesRouter);
app.use(`/search`, searchRouter);

app.listen(DEFAULT_PORT);
