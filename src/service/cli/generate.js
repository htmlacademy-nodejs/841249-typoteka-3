'use strict';
const fs = require(`fs`).promises;
const chalk = require(`chalk`);
const {nanoid} = require(`nanoid`);
const {shuffle} = require(`../../utils.js`);
const {MAX_ID_LENGTH, FILES_PATHES} = require(`../../constants.js`);

const {
  getRandomInt,
} = require(`../../utils`);
const DEFAULT_COUNT = 1;
const FILE_NAME = `mock.json`;
const MAX_COMMENTS = 4;


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

const generateComments = (count, comments) => (
  Array(count).fill({}).map(() => ({
    id: nanoid(MAX_ID_LENGTH),
    text: shuffle(comments)
      .slice(0, getRandomInt(1, 3))
      .join(` `),
  }))
);

const generateOffers = (count, titles, categories, announces, comments) => (
  Array(count).fill({}).map(() => ({
    id: nanoid(MAX_ID_LENGTH),
    title: titles[getRandomInt(0, titles.length)],
    createdDate: getRandomDate(),
    announce: getText(announces),
    fullText: getText(announces, announces.length),
    category: categories[getRandomInt(0, categories.length - 1)],
    comments: generateComments(getRandomInt(1, MAX_COMMENTS), comments),
  }))
);

module.exports = {
  name: `--generate`,
  async run(args) {
    const titles = await readFiles(FILES_PATHES.titlesPath);
    const announces = await readFiles(FILES_PATHES.announcesPath);
    const categories = await readFiles(FILES_PATHES.categoriesPath);
    const comments = await readFiles(FILES_PATHES.commentsPath);
    const [count] = args;
    const countOffer = Number.parseInt(count, 10) || DEFAULT_COUNT;
    const content = JSON.stringify(generateOffers(countOffer, titles, categories, announces, comments));
    try {
      await fs.writeFile(FILE_NAME, content);
      return console.info(chalk.green(0));
    } catch (err) {
      return console.error(chalk.red(1));
    }
  }
};
