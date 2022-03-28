// Возвращает случайное значение от 1 до 100
const getRandomNumber = (min = 1, max = 101) => {
  const minimum = Math.ceil(min);
  const maximum = Math.floor(max);

  return Math.floor(Math.random() * (maximum - minimum)) + minimum;
};

export default getRandomNumber;
