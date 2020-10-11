'use strict';

const express = require(`express`);
const routes = require(`../api/index.js`);
const {API_PREFIX} = require(`../../constants.js`);
const app = express();
const DEFAULT_PORT = 3000;

app.use(API_PREFIX, routes);

module.exports = {
  name: `--server`,
  run(args) {
    const [portArg] = args;
    const port = Number.parseInt(portArg, 10) || DEFAULT_PORT;
    app.listen(port);
  }
};

