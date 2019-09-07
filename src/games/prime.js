import { cons } from '@hexlet/pairs';
import { getRandom, play } from '..';

const condition = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const getTrueAnswer = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num > 0 && num % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const genQuestionAndAnswer = () => {
  const randomNum = getRandom();
  return cons(`${randomNum}`, getTrueAnswer(randomNum).toString());
};

const prime = () => play(condition, genQuestionAndAnswer);

export default prime;
