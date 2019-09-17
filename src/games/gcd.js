import { cons } from '@hexlet/pairs';
import { getRandom, play } from '..';

const condition = 'Find the greatest common divisor of given numbers.';

const getGreatestCommonDivisor = (a, b) => (b === 0 ? a : getGreatestCommonDivisor(b, a % b));

const getGameGcd = () => {
  const getTrueAnswer = (value) => {
    const numbers = value.split(' ');
    return getGreatestCommonDivisor(numbers[0], numbers[1]);
  };
  const question = `${getRandom()} ${getRandom()}`;
  const answer = getTrueAnswer(question);
  return cons(question, answer);
};

const playGameGcd = () => play(condition, getGameGcd);
export default playGameGcd;
