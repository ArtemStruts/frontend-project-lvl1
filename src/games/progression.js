import gameEngine from '../index.js';
import getRandomInt from '../randomizer.js';

const rule = 'What number is missing in the progression?';

const progressionLength = 10;

const createProgression = (progressionStep) => {
  const firstNumber = getRandomInt(0, 21);
  const progression = [];
  progression.push(firstNumber);
  for (let i = 0; i < progressionLength - 1; i += 1) {
    progression.push(progression[i] + progressionStep);
  }
  return progression;
};

const quest = () => {
  const progressionStep = getRandomInt(0, 11);
  const hiddenIndex = getRandomInt(0, progressionLength);
  const questProgression = createProgression(progressionStep);
  const rightAnswer = questProgression[hiddenIndex].toString();
  questProgression[hiddenIndex] = '..';
  return { task: questProgression.join(' '), rightAnswer };
};

export default () => gameEngine(quest, rule);
