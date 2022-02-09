import readlineSync from 'readline-sync';

export const Name = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May i have yout name?');
  console.log(`Hello, ${name}`);
};
