import { cons } from '@hexlet/pairs';
import { getRandom, play } from '..';

const condition = 'Answer "yes" if number even otherwise answer "no".\n';
const getTrueAnswer = (num) => (num % 2 === 0 ? 'yes' : 'no');

const genQuestionAndAnswer = () => {
  const randomNum = getRandom();
  return cons(`${randomNum}`, getTrueAnswer(randomNum));
};

const even = () => play(condition, genQuestionAndAnswer);

export default even;
