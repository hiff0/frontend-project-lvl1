import readlineSync from 'readline-sync';

export const Name = () => {
  const name = readlineSync.question('May i have yout name?');
  console.log(`Hello, ${name}`);
};
