import playTheGame from '../index.js';
import randomNumber from '../getRandomNum.js';

const progCondition = 'What number is missing in the progression?';

const num1 = randomNumber(1, 100);
const num2 = randomNumber(1, 100);

const getProg = (firstElem = num1) => {
  const arr = [firstElem];
  const diff = num2;
  for (let i = 1; i < randomNumber(5, 10); i += 1) {
    const nextNumber = firstElem + (diff * i);
    arr.push(nextNumber);
  }
  return arr;
};

const changeRandomElem = (arr = getProg()) => {
  const randomNum = randomNumber(0, arr.length - 1);
  const dobleDot = '..';
  const result = arr;
  result[randomNum] = dobleDot;

  return arr;
};

const getNewRound = () => {
  const arr = changeRandomElem();
  const question = arr.join(' ');
  const dotElem = arr.indexOf('..');
  const midElem = Math.ceil((arr.length / 2) - 1);
  const diff = num2;
  let answer;
  if (dotElem === 0) {
    answer = arr[1] - diff;
  } else if (dotElem === midElem) {
    answer = arr[midElem + 1] - diff;
  } else {
    answer = arr[0] + (diff * dotElem);
  }
  return [question, String(answer)];
};

const brainProg = () => playTheGame(progCondition, getNewRound);

export default brainProg;
