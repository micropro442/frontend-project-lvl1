import { cons } from '@hexlet/pairs';
import { getRandom, play } from '..';

const condition = 'What is the result of the expression?';

const getRandomOperator = () => {
  const operator = '+-*';
  const randomIndex = Math.round(Math.random() * ((operator.length - 1) - 0) + 0);
  return operator[randomIndex];
};
const getRandomExpression = () => `${getRandom()} ${getRandomOperator()} ${getRandom()}`;

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

const genQuestionAndAnswer = () => {
  const randomExpression = getRandomExpression();
  return cons(`${randomExpression}`, getTrueAnswer(randomExpression).toString());
};

const calc = () => play(condition, genQuestionAndAnswer);

export default calc;
