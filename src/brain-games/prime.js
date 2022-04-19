import playTheGame from '../index.js';
import randomNumber from '../getRandomNum.js';

const evenCondition = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const getNewRound = () => {
  const num = randomNumber(2, 100);
  const question = num;
  const answer = isPrime(num) ? 'yes' : 'no';
  return [question, answer];
};

const brainEven = () => playTheGame(evenCondition, getNewRound);

export default brainEven;
