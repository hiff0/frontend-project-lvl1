import readlineSync from 'readline-sync';
import getRandomNumber from '../index.js';

// Нахождение НОД двух чисел
const getGCD = (number1, number2) => {
  // Алгоритм Евклида
  let n1 = number1;
  let n2 = number2;
  if (n1 === n2) {
    return n1;
  }
  while (n1 !== n2) {
    if (n1 > n2) { n1 -= n2; } else { n2 -= n1; }
  }

  return n1;
};

// Логика игр с нахождение НОД (brain-gcd)
export const GCD = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May i have your name? ');
  console.log(`Hello, ${name}`);
  console.log('Find the greatest common divisor of given numbers.');

  for (let i = 1; i <= 3; i += 1) { // Три вопроса
    const randNumber1 = getRandomNumber();
    const randNumber2 = getRandomNumber();

    console.log(`Question: ${randNumber1} ${randNumber2}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === `${getGCD(randNumber1, randNumber2)}`) { console.log('Correct!'); } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${getGCD(randNumber1, randNumber2)}.\nLet's try again, ${name}`);
      break;
    }
    if (i === 3) { console.log(`Congratulations, ${name}`); }
  }
};
export default GCD;
