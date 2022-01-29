import readlineSync from 'readline-sync';

const getRandomNumber = (min = 1, max = 101) => {//Возвращает рандомное значение от 1 до 100
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

export const EvenNumbers = () => { //Проверка на четность
    const name = readlineSync.question('May i have your name? ');
    console.log(`Hello, ${name}`);
    console.log('Answer "yes" if the number is even, otherwise answer "no".');

    for (let i = 1; i <= 3; i += 1) { //Три вопроса

        let randNumber = getRandomNumber();
        console.log(`Question: ${randNumber}`);
        let answer = readlineSync.question(`Your answer: `);


        if (randNumber % 2 === 0) {
            if (answer === 'yes')
                console.log('Correct!');
            else {
                console.log(`'${answer}' is wrong answer ;(. Correct answer was 'yes'. Let's try again, ${name}`);
                break;
            }
        }
        else if (randNumber % 2 != 0) {
            if (answer === 'no')
                console.log('Correct!');
            else {
                console.log(`'${answer}' is wrong answer ;(. Correct answer was 'no'. Let's try again, ${name}`);
                break;
            }
        }
        if (i === 3)
            console.log(`Congratulations: ${name}!`);
    }
}