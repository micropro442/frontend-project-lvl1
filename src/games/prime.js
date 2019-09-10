import { getRandom, play, genQuestionAndAnswer } from '..';

const condition = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num === 1) {
    return false;
  }
  for (let i = 2; i * i <= num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const getTrueAnswer = (num) => (isPrime(num) ? 'yes' : 'no');


const prime = () => play(condition, genQuestionAndAnswer(getRandom, getTrueAnswer));
export default prime;
