import readlineSync from 'readline-sync';
import { getRandomNumber } from '../index.js';

// Проверка, простое ли число или нет
const primeNumb = (number) => {
  let flag = true;

  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      flag = false;
      break;
    }
  }
  return flag;
};

// Игра: простое числи или нет
export const PrimeNumber = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May i have your name? ');
  console.log(`Hello, ${name}`);
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  for (let i = 1; i <= 3; i += 1) {
    const number = getRandomNumber();
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ');

    if (primeNumb(number)) {
      if (answer === 'yes') { console.log('Correct!'); } else {
        console.log(`${answer} is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${name}`);
        break;
      }
    } else if (!primeNumb(number)) {
      if (answer === 'no') { console.log('Correct!'); } else {
        console.log(`${answer} is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${name}`);
        break;
      }
    }
    if (i === 3) { console.log(`Congratulations, ${name}`); }
  }
};
