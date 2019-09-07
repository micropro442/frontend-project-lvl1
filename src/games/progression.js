import { cons } from '@hexlet/pairs';
import { getRandom, play, getRandomDiffProgress } from '..';

const getRandomProgression = () => {
  const diff = getRandomDiffProgress(1, 9);
  const getProgression = () => {
    let beginNumProgression = getRandom();
    const arr = [];
    const lengthProgress = 10;
    for (let i = 1; i <= lengthProgress; i += 1) {
      arr.push(beginNumProgression);
      beginNumProgression += diff;
    }
    return arr;
  };
  const hideArrElement = () => {
    const arr = getProgression();
    const index = getRandomDiffProgress(1, 8);
    arr.splice(index, 1, '..');
    return arr;
  };
  const convToStr = () => {
    const arr = hideArrElement();
    let str = arr[0];
    for (let i = 1; i < arr.length; i += 1) {
      str += ` ${arr[i]}`;
    }
    return str;
  };
  return convToStr();
};

const getTrueAnswer = (value) => {
  const arr = value.split(' ');
  const i = arr.indexOf('..');
  const diff = Number((arr[arr.length - 1] - arr[0]) / (arr.length - 1));
  return Number(arr[0]) + (diff * i);
};

const condition = 'What number is missing in the progression?';

const genQuestionAndAnswer = () => {
  const progression = getRandomProgression();
  return cons(`${progression}`, getTrueAnswer(progression).toString());
};

const progression = () => play(condition, genQuestionAndAnswer);

export default progression;
