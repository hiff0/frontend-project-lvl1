import readlineSync from 'readline-sync';
export const Name = () => {
    const name = readlineSync.question('What is your name?');
    console.log(`Hello, ${name}`);
}