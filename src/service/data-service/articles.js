'use strict';
const {nanoid} = require(`nanoid`);
const {MAX_ID_LENGTH} = require(`../../constants.js`);

class AticlesService {
  constructor(articles) {
    this._articles = articles;
  }

  findAll() {
    const articles = this._articles.reduce((acc, article) => {

      acc.add(article);
      return acc;
    }, new Set());

    return [...articles];
  }

  findOne(id) {
    return this._articles.find((item) => item.id === id);
  }

  findOneComments(id) {
    const targerarticle = this.findOne(id);
    return targerarticle.comments;
  }

  addArticle(newarticle) {
    this._articles.push({id: nanoid(MAX_ID_LENGTH), ...newarticle});
    return this._articles;
  }

  editArticle(id, targetArticle) {
    this._articles = this._articles.map((article) => {
      if (article.id === id) {
        article = {id: article.id, ...targetArticle};
      }
      return article;
    });
    return this._articles;
  }

  deleteArticle(id) {
    return this._articles.filter((article) => article.id !== id);
  }

  deleteComment(articleId, commentId) {
    this.articles = this._articles.map((article) => {
      if (article.id === articleId) {
        article.comments = article.comments.filter((comment) => comment.id !== commentId);
      }
      return article;
    });
    return this._articles;
  }

  addComment(articleId, newComment) {
    this._articles.forEach((article) => {
      if (article.id === articleId) {
        article.comments.push({id: nanoid(MAX_ID_LENGTH), ...newComment});
      }
    });
    return this._articles;
  }
}

module.exports = AticlesService;
