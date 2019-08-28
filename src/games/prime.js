import { getRandomArbitrary, gameplay } from '..';

const conditions = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const randomNum = () => getRandomArbitrary();
const trueAnswer = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num > 0 && num % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const prime = () => gameplay(conditions, trueAnswer, randomNum);

export default prime;
