import readlineSync from 'readline-sync';

const roundCount = 3;

const gameEngine = (quest, rule) => {
  console.log('Welcome to the Brain Games!');
  const username = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${username}!`);
  console.log(rule);
  for (let i = 1; i <= roundCount; i += 1) {
    const { task, rightAnswer } = quest();
    console.log(`Question: ${task}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === rightAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      console.log(`Let's try again, ${username}!`);
      return;
    }
  } console.log(`Congratulations, ${username}!`);
};

export default gameEngine;
