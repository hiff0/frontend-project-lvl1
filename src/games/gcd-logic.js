import readlineSync from 'readline-sync';
import { getRandomNumber } from '../index.js';

//Нахождение НОД двух чисел
const getGCD = (number1, number2) => {

    //Алгоритм Евклида
    if (number1 === number2)
        gcd = number1;
    while (number1 != number2) {
        if (number1 > number2)
            number1 -= number2;
        else
            number2 -= number1;
    }

    return number1;
}

//Логика игр с нахождение НОД (brain-gcd)
export const GCD = () => {

    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May i have your name? ');
    console.log(`Hello, ${name}`);
    console.log('Find the greatest common divisor of given numbers.');

    for (let i = 1; i <= 3; i += 1) { //Три вопроса

        let randNumber1 = getRandomNumber();
        let randNumber2 = getRandomNumber();

        console.log(`Question: ${randNumber1} ${randNumber2}`);
        let answer = readlineSync.question(`Your answer: `);
        if (answer === `${getGCD(randNumber1, randNumber2)}`)
            console.log('Correct!');
        else {
            console.log(`${answer} is wrong answer ;(. Correct answer was ${getGCD(randNumber1, randNumber2)}.\nLet's try again, ${name}`);
            break;
        }
        if (i === 3)
            console.log(`Congratulations, ${name}`);
    }
}