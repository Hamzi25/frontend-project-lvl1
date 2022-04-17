import playTheGame from '../src/index.js';
import getRandomNumber from '../src/getRandomNum.js';

const gcdCondition = 'Find the greatest common divisor of given numbers.';

const getGcd = (num1, num2) => {
  let x = num1;
  let y = num2;
  while (x && y) {
    if (x > y) {
      x %= y;
    } else {
      y %= x;
    }
  }
  x += y;

  return x;
};

const newRound = (num1 = getRandomNumber(), num2 = getRandomNumber()) => {
  const question = `${num1} and ${num2}`;
  const answer = String(getGcd(num1, num2));

  return [question, answer];
};

const brainGcd = () => playTheGame(gcdCondition, newRound);

export default brainGcd;
