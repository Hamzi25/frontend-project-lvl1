import playTheGame from '../index.js';
import randomNumber from '../getRandomNum.js';

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

const getNewRound = () => {
  const number1 = randomNumber(1, 100);
  const number2 = randomNumber(1, 100);
  const question = `${number1} ${number2}`;
  const answer = String(getGcd(number1, number2));

  return [question, answer];
};

const brainGcd = () => playTheGame(gcdCondition, getNewRound);

export default brainGcd;
