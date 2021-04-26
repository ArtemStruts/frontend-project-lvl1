import { rules, game } from '../src/index.js';

const rule = 'Find the greatest common divisor of given numbers.';
rules(rule);

const quest = () => {
  const a = Math.floor(Math.random() * (101 - 1) + 1);
  const b = Math.floor(Math.random() * (101 - 1) + 1);
  return (`${a} ${b}`);
};

const rightAnswer = (task) => {
  const [a, b] = task.split(' ');
  const gcd = (x, y) => {
    if (y > x) return gcd(y, x);
    if (!y) return x;
    return gcd(y, x % y);
  };
  const result = gcd(Number(a), Number(b)).toString();
  return result;
};
export default game(quest, rightAnswer);
