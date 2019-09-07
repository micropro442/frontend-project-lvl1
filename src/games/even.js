import { getRandom, play, genQuestionAndAnswer } from '..';

const condition = 'Answer "yes" if number even otherwise answer "no".\n';
const getTrueAnswer = (num) => (num % 2 === 0 ? 'yes' : 'no');

const even = () => play(condition, genQuestionAndAnswer(getRandom, getTrueAnswer));
export default even;
