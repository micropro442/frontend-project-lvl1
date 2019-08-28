import { getRandomArbitrary, gameplay } from '..';


const conditionsGame = 'What is the result of the expression?';

const getRandomOperator = () => {
  const num = getRandomArbitrary();
  if (num % 2 === 0) {
    return '+';
  }
  if (num % 3 === 0) {
    return '-';
  }
  return '*';
};
const getRandomExpression = () => `${getRandomArbitrary()} ${getRandomOperator()} ${getRandomArbitrary()}`;

const trueAnswer = (value) => eval(value).toString();

const calc = () => gameplay(conditionsGame, trueAnswer, getRandomExpression);

export default calc;
