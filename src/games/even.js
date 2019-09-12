import { cons } from '@hexlet/pairs';
import { getRandom, play } from '..';

const condition = 'Answer "yes" if number even otherwise answer "no".';

const getGameEven = () => {
  const isEven = (num) => num % 2 === 0;
  const getTrueAnswer = (num) => (isEven(num) ? 'yes' : 'no');
  const question = getRandom();
  const answer = getTrueAnswer(question);
  return cons(question, answer);
};

const playGameEven = () => play(condition, getGameEven);
export default playGameEven;
