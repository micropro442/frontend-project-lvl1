import { getRandom, play, genQuestionAndAnswer } from '..';

const condition = 'What is the result of the expression?';

const getRandomExpression = () => {
  const operator = '+-*';
  return `${getRandom()} ${operator[getRandom(0, operator.length - 1)]} ${getRandom()}`;
};

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


const calc = () => play(condition, genQuestionAndAnswer(getRandomExpression, getTrueAnswer));

export default calc;
