import gameEngine from '../index.js';
import getRandomInt from '../randomizer.js';

const rule = 'Find the greatest common divisor of given numbers.';

const gcd = (x, y) => {
  if (y > x) return gcd(y, x);
  if (!y) return x;
  return gcd(y, x % y);
};

const quest = () => {
  const a = getRandomInt();
  const b = getRandomInt();
  const task = `${a} ${b}`;
  const rightAnswer = gcd(a, b).toString();
  return { task, rightAnswer };
};

export default () => gameEngine(quest, rule);
