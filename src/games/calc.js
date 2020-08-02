import { cons } from '@hexlet/pairs';
import getRandom from '../utils';
import playGame from '..';

const condition = 'What is the result of the expression?';
const operators = '+-*';
const roundsCount = 3;

const getQuestionAndAnswer = () => {
  const getTrueAnswer = (leftValue, rightValue, randomOperator) => {
    switch (randomOperator) {
      case '+':
        return leftValue + rightValue;
      case '-':
        return leftValue - rightValue;
      default:
        return leftValue * rightValue;
    }
  };
  const leftValue = getRandom();
  const rightValue = getRandom();
  const randomOperator = operators[getRandom(0, operators.length - 1)];
  const question = `${leftValue} ${randomOperator} ${rightValue}`;
  const answer = getTrueAnswer(leftValue, rightValue, randomOperator).toString();
  return cons(question, answer);
};

export default () => playGame(condition, getQuestionAndAnswer, roundsCount);
