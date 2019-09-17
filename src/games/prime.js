import { cons } from '@hexlet/pairs';
import { getRandom, play } from '..';

const condition = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num === 1) return false;
  for (let i = 2; i * i <= num; i += 1) {
    if (num % i === 0) return false;
  }
  return true;
};

const getGamePrime = () => {
  const getTrueAnswer = (num) => (isPrime(num) ? 'yes' : 'no');
  const question = getRandom();
  const answer = getTrueAnswer(question);
  return cons(question, answer);
};


const playGamePrime = () => play(condition, getGamePrime);
export default playGamePrime;
