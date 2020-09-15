'use strict';
const {Router} = require(`express`);
const fs = require(`fs`).promises;

const postsRouter = new Router();
const mockPath = `mock.json`;

const readJson = async (path) => {
  try {
    const content = await fs.readFile(path, `utf8`);
    return JSON.parse(content);
  } catch (err) {
    return [];
  }
};

postsRouter.get(`/`, async (req, res) => {
  const posts = await readJson(mockPath);
  return res.json(posts);
});

module.exports = postsRouter;
