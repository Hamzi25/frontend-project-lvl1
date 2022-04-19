import readlineSync from 'readline-sync';

const rounds = 3;

const playTheGame = (condition, getNewRound) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(condition);

  for (let i = 0; i < rounds; i += 1) {
    const [question, answer] = getNewRound();
    console.log(`Question: ${question}`);
    const answerOfUser = readlineSync.question('Your answer: ');
    if (answer !== answerOfUser) {
      return console.log(`${answerOfUser} is wrong answer ;(. Correct answer was ${answer}. Let's try again, ${userName}!`);
    }

    console.log('Correct!');
  }
  return console.log(`Congratulations, ${userName}!`);
};

export default playTheGame;
