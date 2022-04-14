import playTheGame from '../src/index.js';
import randomNumber from '../src/getRandomNum.js';

const evenCondition = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => (num % 2 === 0);

const newRound = () => {
  const num = randomNumber();
  const question = num;
  const answer = isEven(num) ? 'yes' : 'no';
  return [question, answer];
};

const brainEven = () => playTheGame(evenCondition, newRound);

export default brainEven;
