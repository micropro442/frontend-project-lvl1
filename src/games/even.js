import { getRandomArbitrary, gameplay } from '..';

const conditions = 'Answer "yes" if number even otherwise answer "no".\n';

const randomNum = () => getRandomArbitrary();

const isEven = (num) => num % 2 === 0;
const trueAnswer = (num) => {
  if (isEven(num)) {
    return 'yes';
  }
  return 'no';
};


const even = () => gameplay(conditions, trueAnswer, randomNum);

export default even;
