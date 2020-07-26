'use strict';
const fs = require(`fs`).promises;
const chalk = require(`chalk`);
const {
  getRandomInt,
} = require(`../../utils`);

const DEFAULT_COUNT = 1;
const FILE_NAME = `mock.json`;

const TITLES = [
  `Ёлки. История деревьев`,
  `Как перестать беспокоиться и начать жить`,
  `Как достигнуть успеха не вставая с кресла`,
  `Обзор новейшего смартфона`,
  `Лучшие рок-музыканты 20-века`,
  `Как начать программировать`,
  `Учим HTML и CSS`,
  `Что такое золотое сечение`,
  `Как собрать камни бесконечности`,
  `Борьба с прокрастинацией`,
  `Рок — это протест`,
  `Самый лучший музыкальный альбом этого года`,
];

const ANNOUNCES = [
  `Ёлки — это не просто красивое дерево. Это прочная древесина.`,
  `Первая большая ёлка была установлена только в 1938 году.`,
  `Вы можете достичь всего. Стоит только немного постараться и запастись книгами.`,
  `Этот смартфон — настоящая находка. Большой и яркий экран, мощнейший процессор — всё это в небольшом гаджете.`,
  `Золотое сечение — соотношение двух величин, гармоническая пропорция.`,
  `Собрать камни бесконечности легко, если вы прирожденный герой.`,
  `Освоить вёрстку несложно. Возьмите книгу новую книгу и закрепите все упражнения на практике.`,
  `Бороться с прокрастинацией несложно. Просто действуйте. Маленькими шагами.`,
  `Программировать не настолько сложно, как об этом говорят.`,
  `Простые ежедневные упражнения помогут достичь успеха.`,
  `Это один из лучших рок-музыкантов.`,
  `Он написал больше 30 хитов.`,
  `Из под его пера вышло 8 платиновых альбомов.`,
  `Процессор заслуживает особого внимания. Он обязательно понравится геймерам со стажем.`,
  `Рок-музыка всегда ассоциировалась с протестами. Так ли это на самом деле?`,
  `Достичь успеха помогут ежедневные повторения.`,
  `Помните, небольшое количество ежедневных упражнений лучше, чем один раз, но много.`,
  `Как начать действовать? Для начала просто соберитесь.`,
  `Игры и программирование разные вещи. Не стоит идти в программисты, если вам нравится только игры.`,
  `Альбом стал настоящим открытием года. Мощные гитарные рифы и скоростные соло-партии не дадут заскучать.`,
];

const CATEGORIES = [
  `Деревья`,
  `За жизнь`,
  `Без рамки`,
  `Разное`,
  `IT`,
  `Музыка`,
  `Кино`,
  `Программирование`,
  `Железо`,
];

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

const getText = (maxLength = 5) => {
  const MIN_LENGTH = 1;
  const counter = getRandomInt(MIN_LENGTH, maxLength);
  let announce = ``;
  for (let i = 0; i <= counter; i++) {
    announce += ANNOUNCES[getRandomInt(0, ANNOUNCES.length)];
  }
  return announce;
};

const generateOffers = (count) => (
  Array(count).fill({}).map(() => ({
    title: TITLES[getRandomInt(0, TITLES.length)],
    createdDate: getRandomDate(),
    announce: getText(),
    fullText: getText(ANNOUNCES.length),
    сategory: CATEGORIES[getRandomInt(0, CATEGORIES.length - 1)],
  }))
);

module.exports = {
  name: `--generate`,
  async run(args) {
    const [count] = args;
    const countOffer = Number.parseInt(count, 10) || DEFAULT_COUNT;
    const content = JSON.stringify(generateOffers(countOffer));
    try {
      await fs.writeFile(FILE_NAME, content);
      return console.info(chalk.green(0));
    } catch (err) {
      return console.error(chalk.red(1));
    }
  }
};
