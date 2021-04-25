import { rules, game } from '../src/index.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';
rules(rule);
const quest = () => Math.floor(Math.random() * (101 - 1) + 1);
const rightAnswer = (task) => {
  const result = task % 2 === 0 ? 'yes' : 'no';
  return result;
};
export default game(quest, rightAnswer);
