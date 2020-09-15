'use strict';

const express = require(`express`);
const postsRouter = require(`../routes/posts.js`);

const app = express();
const DEFAULT_PORT = 3000;

app.use(`/posts`, postsRouter);


module.exports = {
  name: `--server`,
  run(args) {
    const [portArg] = args;
    const port = Number.parseInt(portArg, 10) || DEFAULT_PORT;
    app.listen(port);
  }
};

