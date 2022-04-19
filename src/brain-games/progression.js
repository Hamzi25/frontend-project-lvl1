import playTheGame from '../index.js';
import getRandomNumber from '../getRandomNum.js';
import getRandomLength from '../getRandomLength.js';
import getRandomIndex from '../getRandomIndex.js';

const progCondition = 'What number is missing in the progression?';

const getProg = (firstElem = getRandomNumber()) => {
  const arr = [firstElem];
  const diff = getRandomNumber();
  for (let i = 1; i < getRandomLength(); i += 1) {
    const nextNumber = firstElem + (diff * i);
    arr.push(nextNumber);
  }
  return arr;
};

const changeRandomElem = (arr = getProg()) => {
  const min = 0;
  const max = arr.length - 1;
  const randomNum = getRandomIndex(min, max);
  const dobleDot = '..';
  const result = arr;
  result[randomNum] = dobleDot;

  return arr;
};

const newRound = () => {
  const arr = changeRandomElem();
  const question = arr.join(' ');
  const dotElem = arr.indexOf('..');
  const midElem = Math.ceil((arr.length / 2) - 1);
  const diff = (arr[midElem] === '..' || arr[midElem - 1] === '..') ? arr[arr.length - 1] - arr[arr.length - 2] : arr[midElem] - arr[midElem - 1];
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

const brainProg = () => playTheGame(progCondition, newRound);

export default brainProg;
