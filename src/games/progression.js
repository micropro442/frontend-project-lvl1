import { cons } from '@hexlet/pairs';
import { getRandom, play } from '..';

const condition = 'What number is missing in the progression?';

const getGameProgression = () => {
  const getRandomProgress = () => {
    const diff = getRandom(1, 9);
    const indexHiddenEl = getRandom(1, 8);
    const startProgression = getRandom();
    const lengthProgression = 10;
    let memberProgression = startProgression;
    let progression = `${startProgression}`;
    for (let i = 0; i <= lengthProgression; i += 1) {
      memberProgression += diff;
      if (i === indexHiddenEl) {
        progression += ' ..';
      } else {
        progression += ` ${memberProgression}`;
      }
    }
    return progression;
  };
  const getTrueAnswer = (value) => {
    const arr = value.split(' ');
    const i = arr.indexOf('..');
    const diff = Number((arr[arr.length - 1] - arr[0]) / (arr.length - 1));
    return Number(arr[0]) + (diff * i);
  };

  const question = getRandomProgress();
  const answer = getTrueAnswer(question).toString();
  return cons(question, answer);
};

const playGameProgression = () => play(condition, getGameProgression);
export default playGameProgression;
