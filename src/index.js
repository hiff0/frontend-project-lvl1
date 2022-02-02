import readlineSync from 'readline-sync';

//Запрос имя пользователя
/*const Name = () => {

    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May i have yout name? ');
    console.log(`Hello, ${name}`);
}*/

//Возвращает случайное значение от 1 до 100
const getRandomNumber = (min = 1, max = 101) => {

    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min)) + min;
}

export { getRandomNumber };