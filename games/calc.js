/* eslint-disable no-eval */
import { rules, game } from '../src/index.js';

const rule = 'What is the result of the expression?';
rules(rule);
const quest = () => {
  const mathSigns = ['+', '-', '*'];
  const a = Math.floor(Math.random() * (31 - 1) + 1);
  const b = Math.floor(Math.random() * (31 - 1) + 1);
  const index = Math.floor(Math.random() * 3);
  const sign = mathSigns[index];
  return (`${a} ${sign} ${b}`);
};
const rightAnswer = (task) => {
  const [a, sign, b] = task.split(' ');
  let operation = 0;
  switch (sign) {
    case '+':
      operation = Number(a) + Number(b);
      break;
    case '-':
      operation = Number(a) - Number(b);
      break;
    case '*':
      operation = Number(a) * Number(b);
      break;
    default:
      break;
  }
  const result = operation.toString();
  return result;
};
export default game(quest, rightAnswer);
