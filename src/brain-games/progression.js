import playTheGame from '../index.js';
import randomNumber from '../getRandomNum.js';

const progCondition = 'What number is missing in the progression?';

const getProg = (firstElem, difference, lengthOfArray) => {
  const arr = [firstElem];
  const diff = difference;
  for (let i = 1; i < lengthOfArray; i += 1) {
    const nextNumber = firstElem + (diff * i);
    arr.push(nextNumber);
  }
  return arr;
};

const changeRandomElem = (arr, raindomIndex) => {
  const randomNum = raindomIndex;
  const dobleDot = '..';
  const result = arr;
  result[randomNum] = dobleDot;

  return arr;
};

const getNewRound = () => {
  const number1 = randomNumber(1, 100);
  const number2 = randomNumber(1, 100);
  const number3 = randomNumber(5, 10);
  const arr = getProg(number1, number2, number3);
  const number4 = randomNumber(0, arr.length - 1);
  const arrWithDots = changeRandomElem(arr, number4);
  const question = arrWithDots.join(' ');
  const dotElem = arrWithDots.indexOf('..');
  const midElem = Math.ceil((arrWithDots.length / 2) - 1);
  const diff = number2;
  let answer;
  if (dotElem === 0) {
    answer = arrWithDots[1] - diff;
  } else if (dotElem === midElem) {
    answer = arrWithDots[midElem + 1] - diff;
  } else {
    answer = arrWithDots[0] + (diff * dotElem);
  }
  return [question, String(answer)];
};

const brainProg = () => playTheGame(progCondition, getNewRound);

export default brainProg;
