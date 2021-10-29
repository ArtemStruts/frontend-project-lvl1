import gameEngine from '../index.js';
import getRandomInt from '../randomizer.js';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  for (let n = 2; n <= num / 2; n += 1) {
    if (num % n === 0) {
      return false;
    }
  } return true;
};

const quest = () => {
  const task = getRandomInt(2, 101);
  const rightAnswer = isPrime(task) ? 'yes' : 'no';
  return { task, rightAnswer };
};

export default () => gameEngine(quest, rule);
