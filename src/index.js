import readlineSync from 'readline-sync';

const round = 3;

// eslint-disable-next-line consistent-return
const playTheGame = (condition, newRound) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(condition);

  for (let i = 1; i <= round; i += 1) {
    const [question, answer] = newRound();
    console.log(`Question: ${question}`);
    const answerOfUser = readlineSync.question('Your answer: ');
    if (answer !== answerOfUser) {
      return console.log(`${answerOfUser} is wrong answer ;(. Correct answer was ${answer}. Let's try again, ${userName}!`);
    }

    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

export default playTheGame;
