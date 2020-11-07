'use strict';
const mock = require(`../mocks.js`);
const CreateAPI = require(`../api.js`);

const {Router} = require(`express`);
const apiServer = new CreateAPI();

const myRouter = new Router();

myRouter.get(`/`, async (req, res) => {
  try {
    const articles = await apiServer.getArticles();
    const myArticles = mock.my;
    articles.forEach((article) => {
      myArticles.publicationsList.push({
        date: {
          text: article.createdDate,
          data: article.createdDate,
        },
        titleLink: {
          text: article.title,
          href: `#`,
        }
      });
    });
    res.render(`my.pug`, myArticles);
  } catch (err) {
    console.log(err);
  }
});
myRouter.get(`/comments`, async (req, res) => {
  let fetchedComments = [];

  try {
    const articles = await apiServer.getArticles();
    const articlesIDs = articles.map((artcle) => artcle.id).slice(0, 3);
    const comments = mock.comments;
    articlesIDs.forEach(async (id) => {
      const commentsList = await apiServer.getArticleComments(id);
      fetchedComments = [...fetchedComments, ...commentsList];
    });
    comments.commentsList = fetchedComments;
    res.render(`comments.pug`, comments);
  } catch (err) {
    console.log(err);
  }
});

module.exports = myRouter;
