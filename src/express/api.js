'use strict';

const axios = require(`axios`);

class CreateAPI {
  constructor() {
    this.instance = axios.create({
      baseURL: `http://localhost:3000/api`,
    });
  }

  async getArticles() {
    try {
      const articles = await this.instance.get(`/articles`);
      return articles.data;
    } catch (err) {
      return err;
    }
  }

  async getArticleById(id) {
    try {
      const article = await this.instance.get(`/articles/${id}`);
      return article.data;
    } catch (err) {
      return err;
    }
  }

  async getArticleComments(id) {
    try {
      const comments = await this.instance.get(`/articles/${id}/comments`);
      return comments.data;
    } catch (err) {
      return err;
    }
  }

  async addArticle(body) {
    try {
      await this.instance.post(`/articles/`, body);
      return `OK`;
    } catch (err) {
      return err;
    }
  }

  async searchArticles(query) {
    try {
      const articles = await this.instance.get(`/search?query=${query}`);
      return articles.data;
    } catch (err) {
      return err;
    }
  }
}

module.exports = CreateAPI;
