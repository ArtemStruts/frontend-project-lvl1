import readlineSync from 'readline-sync';
import name from './cli.js';

export const rules = (rule) => {
  console.log(`Hello, ${name}!`);
  console.log(rule);
};

export const question = (param) => {
  console.log(`Question: ${param}`);
  const answer = readlineSync.question('Your answer: ');
  return answer;
};

export const game = (quest, rightAnswer) => {
  for (let i = 1; i <= 3; i += 1) {
    const task = quest();
    const correctAnswer = rightAnswer(task);
    const userAnswer = question(task);
    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return false;
    }
  } return true;
};

export const congratulations = () => {
  console.log(`Congratulations, ${name}!`);
};
