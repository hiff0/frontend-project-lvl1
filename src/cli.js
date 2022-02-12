import readlineSync from 'readline-sync';

export const Name = () => {
  const name = readlineSync.question('May i have yout name?');
  return name;
  //console.log(`Hello, ${name}`);
};
