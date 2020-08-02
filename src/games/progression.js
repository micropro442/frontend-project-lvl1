import { cons } from '@hexlet/pairs';
import getRandom from '../utils';
import playGame from '..';

const condition = 'What number is missing in the progression?';
const roundsCount = 3;

const getRandomProgress = (progressionLength) => {
  const startProgression = getRandom();
  const diff = getRandom(1, progressionLength - 1);
  const progression = [startProgression];
  for (let i = 0; i < progressionLength - 1; i += 1) {
    progression.push(progression[i] + diff);
  }
  return progression;
};

const getQuestionAndAnswer = () => {
  const progressionLength = 10;
  const indexHiddenEl = getRandom(1, progressionLength - 1);
  const randomProgress = getRandomProgress(progressionLength);
  let question = '';
  const answer = randomProgress[indexHiddenEl].toString();
  for (let i = 0; i < progressionLength; i += 1) {
    if (i !== indexHiddenEl) {
      question += `${randomProgress[i]} `;
    } else {
      question += '.. ';
    }
  }
  return cons(question, answer);
};

export default () => playGame(condition, getQuestionAndAnswer, roundsCount);
