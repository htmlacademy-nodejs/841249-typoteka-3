'use strict';
const sequelize = require(`../data-base`);
const express = require(`express`);
const routes = require(`../api/index.js`);
const {API_PREFIX} = require(`../../constants.js`);
const {getLogger} = require(`../../logger`);
const logger = getLogger();
const chalk = require(`chalk`);


const app = express();
const DEFAULT_PORT = 3000;

app.use(express.json());
app.use((req, res, next) => {
  logger.debug(`request to url ${req.url}`);
  next();
});
app.use(API_PREFIX, routes);

module.exports = {
  name: `--server`,
  async run(args) {
    const [portArg] = args;
    const port = Number.parseInt(portArg, 10) || DEFAULT_PORT;
    try {
      logger.info(`Trying to connect to database...`);
      await sequelize.authenticate();
    } catch (err) {
      logger.error(`An error occured: ${err.message}`);
      process.exit(1);
    }
    logger.info(`Connection to database established`);
    app.listen(port, (err) => {
      if (err) {
        logger.error(`Can't launch server with error ${err}`);
        return console.error(`Ошибка при создании сервера`, err);
      }
      logger.info(`Server launched. Listening port: ${port}`);
      return console.info(chalk.green(`Ожидаю соединений на ${port}`));
    });
  }
};

