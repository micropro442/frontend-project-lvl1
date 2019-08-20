import { getRandomArbitrary, gameplay } from '..'

const conditions = 'Find the greatest common divisor of given numbers.'
const genTwoNumber = () => `${getRandomArbitrary()} ${getRandomArbitrary()}`;

const getGcd = (a, b) => {
    let max = Math.max(a, b);
    let min = Math.min(a, b);
    if (max % min === 0) {
        return min;
    } else {
        max %= min;
        return getGcd(max, min);
    }
};

const trueAnswer = (value) => {
    const convToArr = value.split(' ');
    return getGcd(convToArr[0], convToArr[1]).toString(); 
};

export const gcd = () => gameplay(conditions, trueAnswer, genTwoNumber);