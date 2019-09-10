import readlineSync from 'readline-sync';
import { car, cdr, cons } from '@hexlet/pairs';

export const getAnswer = (num) => readlineSync.question(`Question ${num}`, { hideEchoBack: true, mask: '' });

export const getRandom = (min = 1, max = 50) => Math.round(Math.random() * (max - min) + min);

export const genQuestionAndAnswer = (genRandom, genTrueAnswer) => () => {
  const random = genRandom();
  return cons(`${random}`, genTrueAnswer(random).toString());
};


// ------play------/

export const play = (conditions = '', questionAndAnswer) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${conditions}\n`);
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!\n`);
  const numOfrounds = 3;
  for (let i = 1; i <= numOfrounds; i += 1) {
    const questionAnswer = questionAndAnswer();
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
