import { getRandom, play, genQuestionAndAnswer } from '..';

const condition = 'Find the greatest common divisor of given numbers.';
const genTwoNumber = () => `${getRandom()} ${getRandom()}`;

const getGreatestCommonDivisor = (a, b) => {
  if (b === 0) {
    return a;
  }
  return getGreatestCommonDivisor(b, a % b);
};

const getTrueAnswer = (value) => {
  const numbers = value.split(' ');
  return getGreatestCommonDivisor(numbers[0], numbers[1]);
};

const gcd = () => play(condition, genQuestionAndAnswer(genTwoNumber, getTrueAnswer));
export default gcd;
