import { rules, game } from '../src/index.js';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';
rules(rule);

const quest = () => {
  const a = Math.floor(Math.random() * (101 - 2) + 2);
  return a;
};

const rightAnswer = (task) => {
  for (let n = 2; n < task; n += 1) {
    if (task % n === 0) {
      return 'no';
    }
  } return 'yes';
};
export default game(quest, rightAnswer);
