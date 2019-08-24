import readlineSync from 'readline-sync';

export const userName = () => readlineSync.question('May I have your name? ');

export const greeting = () => console.log('Hello, ' + userName() + '!');

export const getAnswer = (num) => readlineSync.question('Question ' + num, { hideEchoBack: true, mask: '' });

export const getRandomArbitrary = () => Math.round(Math.random() * (50 - 1) + 1);

export const getRandomDeltaProgress = (max, min) => Math.round(Math.random() * (max - min) + min);


// ------- game-play------/

export const gameplay = (conditions = '', getTrueAnswer, getRandomValue) => {
    console.log('Welcome to the Brain Games!');
    console.log(`${conditions}\n`);
    const name = userName();
    console.log('Hello, ' + name + '!\n');
        for (let i = 1; i <= 3; i++) {
            const randomValue = getRandomValue();            
            const answer =  getAnswer(randomValue); 
            const trueAnswer = getTrueAnswer(randomValue);           
            
            if (answer === trueAnswer) {
                console.log(`Your answer: ${answer}\nCorrect!`)                
            } else {
                return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${trueAnswer}'.\nLet's try again, ${name}`)
            }            
        }    
        console.log(`Congratulations, ${name}!`);          
    };

// ---- game-play end ---- /
    
                