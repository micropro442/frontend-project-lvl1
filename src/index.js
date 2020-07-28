import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';
import { getAnswer } from './utils';

// ------play------/

export default (conditions = '', questionAndAnswer, roundsCount) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${conditions}\n`);
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);
  for (let i = 1; i <= roundsCount; i += 1) {
    const questionAnswer = questionAndAnswer();
    const answer = getAnswer(car(questionAnswer));
    const trueAnswer = cdr(questionAnswer);
    if (answer === trueAnswer) {
      console.log(`Your answer: ${answer}\nCorrect!`);
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${trueAnswer}'`);
      console.log(`Let's try again, ${name}`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

// ---play end ---- /
