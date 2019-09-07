import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';

export const getAnswer = (num) => readlineSync.question(`Question ${num}`, { hideEchoBack: true, mask: '' });

export const getRandom = () => Math.round(Math.random() * (50 - 1) + 1);

export const getRandomDiffProgress = (max, min) => Math.round(Math.random() * (max - min) + min);


// ------play------/

export const play = (conditions = '', genQuestionAndAnswer) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${conditions}\n`);
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);
  const numOfrounds = 3;
  for (let i = 1; i <= numOfrounds; i += 1) {
    const questionAnswer = genQuestionAndAnswer();
    const answer = getAnswer(car(questionAnswer));
    const trueAnswer = cdr(questionAnswer);
    if (answer === trueAnswer) {
      console.log(`Your answer: ${answer}\nCorrect!`);
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${trueAnswer}'`);
      return console.log(`Let's try again, ${name}`);
    }
  }
  return console.log(`Congratulations, ${name}!`);
};

// ---play end ---- /
