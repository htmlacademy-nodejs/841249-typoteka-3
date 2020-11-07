'use strict';

const axios = require(`axios`);

class CreateAPI {

  async getArticles() {
    try {
      const articles = await axios.get(`http://localhost:3000/api/articles`);
      return articles.data;
    } catch (err) {
      return err;
    }
  }

  async getArticleById(id) {
    try {
      const article = await this.instance.get(`/articles/${id}`);
      return article;
    } catch (err) {
      return err;
    }
  }

  async getArticleComments(id) {
    try {
      const comments = await axios.get(`http://localhost:3000/api/articles/${id}/comments`);
      return comments.data;
    } catch (err) {
      return err;
    }
  }
}

module.exports = CreateAPI;
