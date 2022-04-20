import playTheGame from '../index.js';
import randomNumber from '../getRandomNum.js';

const evenCondition = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => (num % 2 === 0);

const getNewRound = () => {
  const number = randomNumber(1, 100);
  const question = number;
  const answer = isEven(number) ? 'yes' : 'no';
  return [question, answer];
};

const brainEven = () => playTheGame(evenCondition, getNewRound);

export default brainEven;
