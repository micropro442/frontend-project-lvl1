import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';

export const getAnswer = (num) => readlineSync.question(`Question ${num}`, { hideEchoBack: true, mask: '' });

export const getRandom = (min = 1, max = 50) => Math.round(Math.random() * (max - min) + min);

// ------play------/

export const play = (conditions = '', questionAndAnswer) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${conditions}\n`);
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);
  const roundsCount = 3;
  for (let i = 1; i <= roundsCount; i += 1) {
    const questionAnswer = questionAndAnswer();
    const answer = getAnswer(car(questionAnswer));
    const trueAnswer = cdr(questionAnswer);
    if (answer === trueAnswer) {
      console.log(`Your answer: ${answer}\nCorrect!`);
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${trueAnswer}'`);
      console.log(`Let's try again, ${name}`);
      return undefined;
    }
  }
  console.log(`Congratulations, ${name}!`);
  return undefined;
};

// ---play end ---- /
