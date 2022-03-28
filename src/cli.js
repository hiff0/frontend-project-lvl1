import readlineSync from 'readline-sync';

const Name = () => {
  const name = readlineSync.question('May i have yout name?');
  console.log(`Hello, ${name}`);
};
export default Name;
