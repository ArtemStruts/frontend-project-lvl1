import { rules, game } from '../src/index.js';

const rule = 'What number is missing in the progression?';
rules(rule);

const progressionStep = Math.floor(Math.random() * 11);

const quest = () => {
  const firstNumber = Math.floor(Math.random() * 21);
  const hiddenNumberIndex = Math.floor(Math.random() * 10);
  const result = [firstNumber];
  for (let i = 0; i < 9; i += 1) {
    result.push(result[i] + progressionStep);
  } result[hiddenNumberIndex] = '..';
  return result.join(' ');
};

const rightAnswer = (task) => {
  const progression = task.split(' ');
  const index = progression.indexOf('..');
  if (index === 0) {
    const result = Number(progression[1]) - progressionStep;
    return result.toString();
  }
  const result = Number(progression[index - 1]) + progressionStep;
  return result.toString();
};

export default game(quest, rightAnswer);
