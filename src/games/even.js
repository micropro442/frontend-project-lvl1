import { cons } from '@hexlet/pairs';
import { getRandom } from '../utils';
import playGame from '..';

const condition = 'Answer "yes" if number even otherwise answer "no".';
const roundsCount = 3;

const isEven = (num) => num % 2 === 0;

const getQuestionAndAnswer = () => {
  const question = getRandom();
  const answer = isEven(question) ? 'yes' : 'no';
  return cons(question, answer);
};

export default () => playGame(condition, getQuestionAndAnswer, roundsCount);
