import { getRandomArbitrary, gameplay } from '..'

const conditions = 'Answer "yes" if number even otherwise answer "no".\n'

const randomNum = () => getRandomArbitrary();

const isEven = (num) => num % 2 === 0;
const trueAnswer = (num) => isEven(num) ? 'yes' : 'no'; 

export const even = () => gameplay(conditions, trueAnswer, randomNum);