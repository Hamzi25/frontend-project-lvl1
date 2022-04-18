import playTheGame from '../src/index.js';
import getRandomNumber from '../src/getRandomNum.js';
import getRandomLength from '../src/getRandomLength.js';
import getRandomIndex from '../src/getRandomIndex.js';

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

const newArr = getProg();

const changeRandomElem = (arr = newArr) => {
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
  const question = arr.join(', ');
  const dotElem = arr.indexOf('..');
  const midElem = Math.ceil(arr.length / 2);
  const diff = (arr[midElem] === '..' || arr[midElem - 1] === '..') ? arr[arr.length - 1] - arr[arr.length - 2] : arr[midElem] - arr[midElem - 1];
  // eslint-disable-next-line max-len
  const answer = (dotElem === 0 || dotElem === midElem) ? (arr[1] - diff) : (arr[0] + (diff * dotElem));
  return [question, answer];
};

const brainProg = () => playTheGame(progCondition, newRound);

export default brainProg;
