import readlineSync from 'readline-sync';

export const userName = () => readlineSync.question('May I have your name? ');

export const greeting = () => console.log('Hello, ' + userName() + '!');

export const getAnswer = (num) => readlineSync.question('Question ' + num, { hideEchoBack: true, mask: '' });

export const getRandomArbitrary = (min, max) => Math.round(Math.random() * (max - min) + min);


// ------- brain-even start------/

export const brainEvenGame = () => {
    const name = userName();
    console.log('Hello, ' + name + '!\n');
        for (let i = 1; i <= 3; i++) {
            const num = getRandomArbitrary(1, 100);        
            const isEven = num % 2 === 0;
            const answer =  getAnswer(num); 

            if (isEven) {
                if (answer === 'yes') {
                    console.log('Your answer: ' + answer);
                } else {
                    return console.log(`'${answer}' is wrong answer ;(. Correct answer was 'yes'.\n Let's try again, ${name}!`);
                }                            
            } else {
                if (answer === 'no') {
                    console.log('Your answer: ' + answer);
                } else {
                    return console.log(`'${answer}' is wrong answer ;(. Correct answer was 'no'.\n Let's try again, ${name}!`);   
                }                         
            }            
        }
        console.log(`Correct!\nCongratulations, ${name}!`);          
    };

// ---- brain-even end ---- /
    
                