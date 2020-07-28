import { cons } from '@hexlet/pairs';
import { getRandom } from '../utils';
import playGame from '..';

const condition = 'Find the greatest common divisor of given numbers.';
const roundsCount = 3;
const getGreatestCommonDivisor = (a, b) => (b === 0 ? a : getGreatestCommonDivisor(b, a % b));

const getQuestionAndAnswer = () => {
  const leftValue = getRandom();
  const rightValue = getRandom();
  const question = `${leftValue} ${rightValue}`;
  const answer = getGreatestCommonDivisor(leftValue, rightValue).toString();
  return cons(question, answer);
};

export default () => playGame(condition, getQuestionAndAnswer, roundsCount);
