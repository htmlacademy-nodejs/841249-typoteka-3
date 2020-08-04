'use strict';

const http = require(`http`);
const fs = require(`fs`).promises;
const chalk = require(`chalk`);

const DEFAULT_PORT = 3000;
const HTTP_SUCCESS_CODE = 200;
const HTTP_ERROR_CODE = 404;
const mockPath = `mock.json`;

const readJson = async (path) => {
  try {
    const content = await fs.readFile(path, `utf8`);
    return JSON.parse(content);
  } catch (err) {
    console.error(chalk.red(err));
    return false;
  }
};

const createNode = (content) => {

  const titlesItems = content.map((currentValue) => {
    return `<li>${currentValue.title}</li>`;
  });
  const titlesList = `<ul>${titlesItems.join(``)}</ul>`;
  return titlesList;
};

const onClientConnect = async (request, response) => {
  const parsedTitle = await readJson(mockPath);
  if (parsedTitle && request.url === `/`) {
    response.writeHead(HTTP_SUCCESS_CODE, {
      'Content-Type': `text/html; charset=UTF-8`,
    });
    const node = await createNode(parsedTitle);
    response.end(node);
  } else {
    response.writeHead(HTTP_ERROR_CODE, {
      'Content-Type': `text/plain`,
    });
    response.end(`Not found`);
  }

};

const httpServer = http.createServer(onClientConnect);


module.exports = {
  name: `--server`,
  async run(args) {
    const [portArg] = args;
    const port = Number.parseInt(portArg, 10) || DEFAULT_PORT;
    httpServer.listen(port, (err) => {
      if (err) {
        return console.error(`Ошибка при создании http-сервера.`, err);
      }
      return console.info(`Принимаю подключения на ${port}`);
    });
  }
};
