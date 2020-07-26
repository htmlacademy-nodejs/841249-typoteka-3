'use strict';
const fs = require(`fs`).promises;
const chalk = require(`chalk`);
const {
  getRandomInt,
} = require(`../../utils`);
const DEFAULT_COUNT = 1;
const FILE_NAME = `mock.json`;

const FILES_PATHES = {
  titlesPath: `data/titles.txt`,
  announcesPath: `data/sentences.txt`,
  categoriesPath: `data/categories.txt`,
};

const readFiles = async (path) => {
  try {
    const content = await fs.readFile(path, `utf8`);
    return content.split(`\n`).filter(Boolean);
  } catch (err) {
    console.error(chalk.red(err));
    return [];
  }
};

const getRandomDate = () =>{
  const MOUNCE_DEEP = 3;
  const MIN_DAY = 1;
  const MAX_DAY = 28;
  const now = new Date();
  const currentDay = now.getDate();
  const currentMounth = now.getMonth() + 1;
  const currentyear = now.getFullYear();
  const startMounth = currentMounth - MOUNCE_DEEP;
  const randomMounth = getRandomInt(startMounth, currentMounth);
  let randomDay;
  if (randomMounth < currentMounth) {
    randomDay = getRandomInt(MIN_DAY, MAX_DAY);
  } else {
    randomDay = getRandomInt(MIN_DAY, currentDay);
  }
  return new Date(`${randomMounth}/${randomDay}/${currentyear}`).toLocaleString();
};

const getText = (announces, maxLength = 5) => {
  const MIN_LENGTH = 1;
  const counter = getRandomInt(MIN_LENGTH, maxLength);
  let announce = ``;
  for (let i = 0; i <= counter; i++) {
    announce += announces[getRandomInt(0, announces.length)];
  }
  return announce;
};

const generateOffers = (count, titles, categories, announces) => (
  Array(count).fill({}).map(() => ({
    title: titles[getRandomInt(0, titles.length)],
    createdDate: getRandomDate(),
    announce: getText(announces),
    fullText: getText(announces, announces.length),
    сategory: categories[getRandomInt(0, categories.length - 1)],
  }))
);

module.exports = {
  name: `--generate`,
  async run(args) {
    const titles = await readFiles(FILES_PATHES.titlesPath);
    const announces = await readFiles(FILES_PATHES.announcesPath);
    const categories = await readFiles(FILES_PATHES.categoriesPath);
    const [count] = args;
    const countOffer = Number.parseInt(count, 10) || DEFAULT_COUNT;
    const content = JSON.stringify(generateOffers(countOffer, titles, categories, announces));
    try {
      await fs.writeFile(FILE_NAME, content);
      return console.info(chalk.green(0));
    } catch (err) {
      return console.error(chalk.red(1));
    }
  }
};
