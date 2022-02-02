import readlineSync from 'readline-sync';
import { getRandomNumber } from '../index.js';

export const Progression = () => {

    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May i have yout name? ');
    console.log(`Hello, ${name}`);
    console.log('What number is missing in the progression?');

    for (let i = 1; i <= 3; i += 1) { //Три вопроса

        let number = getRandomNumber(1, 10);
        let progression = [];
        let randIndex = getRandomNumber(0, 10);
        const step = getRandomNumber(1, 11);

        for (let i = 0; i <= 9; i += 1) {
            progression.push(number);
            number += step;
        }

        const randNumber = progression[randIndex];
        progression[randIndex] = '..';

        console.log(`Question: ${progression.join(' ')}`);
        let answer = readlineSync.question(`Your answer: `);

        if (answer === `${randNumber}`)
            console.log('Correct!');
        else {
            console.log(`${answer} is wrong answer ;(. Correct answer was ${randNumber}.\nLet's try again, ${name}`);
            break;
        }
        if (i === 3)
            console.log(`Congratulations, ${name}`);
    }
}