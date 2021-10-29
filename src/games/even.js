import gameEngine from '../index.js';
import getRandomInt from '../randomizer.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const quest = () => {
  const task = getRandomInt();
  const rightAnswer = isEven(task) ? 'yes' : 'no';
  return { task, rightAnswer };
};

export default () => gameEngine(quest, rule);
