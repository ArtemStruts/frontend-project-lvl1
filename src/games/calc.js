/* eslint-disable no-eval */
import gameEngine from '../index.js';
import getRandomInt from '../randomizer.js';

const rule = 'What is the result of the expression?';

const mathSigns = ['+', '-', '*'];

const calculate = (a, b, sign) => {
  switch (sign) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    default:
      return null;
  }
};

const quest = () => {
  const a = getRandomInt(1, 31);
  const b = getRandomInt(1, 31);
  const index = getRandomInt(0, mathSigns.length);
  const sign = mathSigns[index];
  const task = `${a} ${sign} ${b}`;
  const rightAnswer = calculate(a, b, sign).toString();
  return { task, rightAnswer };
};

export default () => gameEngine(quest, rule);
