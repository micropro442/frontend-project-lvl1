import { getRandomArbitrary, gameplay } from '..'

const conditions = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const randomNum = () => getRandomArbitrary();
const trueAnswer = (num) => {
    for(let i = 2; i < num; i++) {
        if (num > 0 && num % i === 0) {
            return 'no';
        }
    }
    return 'yes'; 
};

export const prime = () => gameplay(conditions, trueAnswer, randomNum);



