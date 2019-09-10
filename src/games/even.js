import { getRandom, play, genQuestionAndAnswer } from '..';

const condition = 'Answer "yes" if number even otherwise answer "no".';

const isEven = (num) => num % 2 === 0;
const getTrueAnswer = (num) => (isEven(num) ? 'yes' : 'no');

const even = () => play(condition, genQuestionAndAnswer(getRandom, getTrueAnswer));
export default even;
