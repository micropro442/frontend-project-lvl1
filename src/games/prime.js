import { getRandom, play, genQuestionAndAnswer } from '..';

const condition = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const getTrueAnswer = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num > 0 && num % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const prime = () => play(condition, genQuestionAndAnswer(getRandom, getTrueAnswer));
export default prime;
