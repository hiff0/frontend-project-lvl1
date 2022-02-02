import readlineSync from 'readline-sync';
import { getRandomNumber } from "../index.js";

const randExpression = () => {

    const operators = ['+', '-', '*'];

    let randIndex = Math.floor(Math.random() * operators.length);
    let randOprator = operators[randIndex];

    return randOprator;
}

//Логика игры "Калькулятор" (brain-calc)
export const CalcGame = () => {

    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May i have your name? ');
    console.log(`Hello, ${name}`);
    console.log('What is the result of the expression?');

    for (let i = 1; i <= 3; i += 1) { //Три вопроса

        let rand1 = getRandomNumber();
        let rand2 = getRandomNumber();
        let randOper = randExpression();
        let result; //Для записи результата выражения

        if (randOper === '+')
            result = rand1 + rand2;
        else if (randOper === '-')
            result = rand1 - rand2;
        else if (randOper === '*')
            result = rand1 * rand2;

        console.log(`Question: ${rand1} ${randOper} ${rand2}`);
        let answer = readlineSync.question(`Your answer: `);

        if (answer === `${result}`) //Если ответ равен рузультату выражения
            console.log('Correct!');
        else { //Во всех остальных случаях выводим проигрыш и выходим из цикла
            console.log(`${answer} is wrong answer ;(. Correct answer was ${result}.\nLet's try again, ${name}`);
            break;
        }
        if (i === 3)
            console.log(`Congratulations, ${name}`);
    }
}