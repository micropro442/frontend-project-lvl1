import { cons } from '@hexlet/pairs';
import { getRandom, play } from '..';

const condition = 'What is the result of the expression?';

const getGameCalc = () => {
  const getRandomExpression = (value) => `${getRandom()} ${value[getRandom(0, value.length - 1)]} ${getRandom()}`;

  const getTrueAnswer = (value) => {
    const arr = value.split(' ');
    const leftValue = Number(arr[0]);
    const rightValue = Number(arr[arr.length - 1]);
    const operator = arr[1];
    switch (operator) {
      case '+':
        return leftValue + rightValue;
      case '-':
        return leftValue - rightValue;
      default:
        return leftValue * rightValue;
    }
  };
  const question = getRandomExpression('+-*');
  const answer = getTrueAnswer(question).toString();
  return cons(question, answer);
};

const playGameCalc = () => play(condition, getGameCalc);

export default playGameCalc;
