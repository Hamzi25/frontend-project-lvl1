import playTheGame from '../index.js';
import randomNumber from '../getRandomNum.js';

const calcCondition = 'What is the result of the expression?';

const getTypeOfCulc = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return 'Sorry, this operand is not allowed.';
  }
};

const getRundomOper = (oper) => oper[randomNumber(0, oper.length - 1)];
const operators = ['+', '-', '*'];

const getNewRound = () => {
  const num1 = randomNumber();
  const num2 = randomNumber();
  const randomOper = getRundomOper(operators);
  const answer = String(getTypeOfCulc(num1, num2, randomOper));
  const question = `${num1} ${randomOper} ${num2}`;
  return [question, answer];
};

const brainCalc = () => playTheGame(calcCondition, getNewRound);

export default brainCalc;
