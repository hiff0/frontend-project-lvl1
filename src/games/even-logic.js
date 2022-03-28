import readlineSync from 'readline-sync';
import { getRandomNumber } from '../index.js';

export const EvenNumbers = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May i have your name? ');
  console.log(`Hello, ${name}`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 1; i <= 3; i += 1) { // Три вопроса
    const randNumber = getRandomNumber();
    console.log(`Question: ${randNumber}`);
    const answer = readlineSync.question('Your answer: ');

    if (randNumber % 2 === 0) { // Если число четное
      if (answer === 'yes') { console.log('Correct!'); } else {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was 'yes'. Let's try again, ${name}`);
        break;
      }
    } else if (randNumber % 2 != 0) { // Если число не четное
      if (answer === 'no') { console.log('Correct!'); } else {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${name}`);
        break;
      }
    }
    if (i === 3) { console.log(`Congratulations: ${name}!`); }
  }
};
