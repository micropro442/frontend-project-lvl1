import readlineSync from 'readline-sync';

export const userName = () => readlineSync.question('May I have your name? ');

export const greeting = () => console.log('Hello, ' + userName() + '!');

export const getAnswerIsEven = (num) => readlineSync.question('Question ' + num, { hideEchoBack: true, mask: '' });


// ------- brain-even start------/

export const brainEvenGame = () => {
    const name = userName();
    console.log('Hello, ' + name + '!\n');

    const getRandomArbitrary = (min, max) => Math.round(Math.random() * (max - min) + min);
        for (let i = 1; i <= 3; i++) {
            const num = getRandomArbitrary(1, 100);        
            const isEven = num % 2 === 0;
            const answer =  getAnswerIsEven(num);  

            if (isEven && answer === 'yes') {
                console.log('Your answer: ' + answer);
                
            }
            if (isEven && answer === 'no') {
                console.log("'yes' is wrong answer ;(. Correct answer was 'no'.");
                console.log(`Let's try again, ${name}!`);
                return;
            }    
            if (!isEven && answer === 'yes') {
                console.log("'yes' is wrong answer ;(. Correct answer was 'no'.");
                console.log(`Let's try again, ${name}!`);
                return;
            }    
            if (!isEven && answer === 'no') {
                console.log('Your answer: ' + answer);
            }
            if (isEven && answer !== 'yes') {
                console.log(answer + " is wrong answer ;(. Correct answer was 'yes'.");
                console.log(`Let's try again, ${name}!`);
                return;
            }
            if (!isEven && answer !== 'no') {
                console.log(answer + " is wrong answer ;(. Correct answer was 'no'.")
                console.log(`Let's try again, ${name}!`);
                return;
            }
        
        }
        console.log('Correct!');
        console.log(`Congratulations, ${name}!`);    
    };

// ---- brain-even end ---- /
    
                