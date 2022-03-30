import readlineSync from 'readline-sync';
import getRandomNumber from '../index.js';

const randExpression = () => {
  const operators = ['+', '-', '*'];

  const randIndex = Math.floor(Math.random() * operators.length);
  const randOprator = operators[randIndex];

  return randOprator;
};

// Логика игры "Калькулятор" (brain-calc)
const CalcGame = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  console.log('What is the result of the expression?');

  for (let i = 1; i <= 3; i += 1) { // Три вопроса
    const rand1 = getRandomNumber();
    const rand2 = getRandomNumber();
    const randOper = randExpression();
    let result; // Для записи результата выражения

    if (randOper === '+') { result = rand1 + rand2; } else if (randOper === '-') { result = rand1 - rand2; } else if (randOper === '*') { result = rand1 * rand2; }

    console.log(`Question: ${rand1} ${randOper} ${rand2}`);
    const answer = readlineSync.question('Your answer: ');
    // Если ответ равен рузультату выражения
    if (answer === `${result}`) { console.log('Correct!'); } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${result}.\nLet's try again, ${name}!`);
      break;
    }
    if (i === 3) { console.log(`Congratulations, ${name}!`); }
  }
};
export default CalcGame;
