import readlineSync from 'readline-sync';

//Возвращает рандомный оператор/значение массива
const randExpression = () => {

    const operators = ['+', '-', '*'];

    let randIndex = Math.floor(Math.random() * operators.length);
    let randOprator = operators[randIndex];

    return randOprator;
}

//Возвращает случайное значение от 1 до 100
const getRandomNumber = (min = 1, max = 101) => {

    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min)) + min;
}

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

//Запрос имя пользователя
export const Name = () => {

    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('What is your name?');
    console.log(`Hello, ${name}`);
}

//Проверка на четность, логика игры brain-even
export const EvenNumbers = () => {

    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May i have your name? ');
    console.log(`Hello, ${name}`);
    console.log('Answer "yes" if the number is even, otherwise answer "no".');

    for (let i = 1; i <= 3; i += 1) { //Три вопроса

        let randNumber = getRandomNumber();
        console.log(`Question: ${randNumber}`);
        let answer = readlineSync.question(`Your answer: `);


        if (randNumber % 2 === 0) { //Если число четное
            if (answer === 'yes')
                console.log('Correct!');
            else {
                console.log(`'${answer}' is wrong answer ;(. Correct answer was 'yes'. Let's try again, ${name}`);
                break;
            }
        }
        else if (randNumber % 2 != 0) { //Если число не четное
            if (answer === 'no')
                console.log('Correct!');
            else {
                console.log(`'${answer}' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${name}`);
                break;
            }
        }
        if (i === 3)
            console.log(`Congratulations: ${name}!`);
    }
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

//Игра brain-progression ("Арифмитическая прогрессия")
export const Progression = () => {

    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May i have your name? ');
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

        const a = progression[randIndex];
        progression[randIndex] = '..';

        console.log(`Question: ${progression.join(' ')}`);
        let answer = readlineSync.question(`Your answer: `);

        if (answer === `${a}`)
            console.log('Correct!');
        else {
            console.log(`${answer} is wrong answer ;(. Correct answer was ${a}.\nLet's try again, ${name}`);
            break;
        }
        if (i === 3)
            console.log(`Congratulations, ${name}`);
    }
}

//Игра: простое числи или нет
export const PrimeNumber = () => {

}
