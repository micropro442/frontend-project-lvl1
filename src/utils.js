import readlineSync from 'readline-sync';

export const getRandom = (min = 1, max = 50) => Math.round(Math.random() * (max - min) + min);

export const getAnswer = (num) => readlineSync.question(`Question ${num}`, { hideEchoBack: true, mask: '' });
