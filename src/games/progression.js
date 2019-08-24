import { getRandomArbitrary, gameplay, getRandomDeltaProgress } from '..'

const getRandomProgression = () => {
    let deltaProgression = getRandomDeltaProgress(1, 9);
    const getProgression = () => {
        let beginNumProgression = getRandomArbitrary();
        let arr = []; 
        for (let i = 1; i <= 10; i++) {
            arr.push(beginNumProgression);
            beginNumProgression += deltaProgression;                
        }
        return arr;
    }
    
    const hideArrElement = () => {
        const arr = getProgression();
        const index = deltaProgression;
        arr.splice(index, 1, '..');
        return arr;
    };
    
    const convToStr = () => {
        const arr =  hideArrElement();
        let str = arr[0];
        for (let i = 1; i < arr.length; i++) {
            str += ' ' + arr[i]
        }
        return str;        
    };
    return convToStr();
}; 
    

const trueAnswer = (value) => {
   
    const arr = value.split(' ');
    let delta = 0;
    if (arr[arr.length - 1] !== '..') {
        delta = (arr[arr.length - 1] - arr[0]) / 9;
    } else {
        delta = (arr[arr.length - 2] - arr[0]) / 8;
    }    
    const indexEl = arr.indexOf('..');     
    const x = Number(arr[0]) + (indexEl * delta);
    return x.toString();
};

const conditions = 'What number is missing in the progression?'

export const progression = () => gameplay(conditions, trueAnswer, getRandomProgression);
   
    

trueAnswer(getRandomProgression());





