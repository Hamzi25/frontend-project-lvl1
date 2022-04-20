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
  const number1 = randomNumber(1, 100);
  const number2 = randomNumber(1, 100);
  const randomOper = getRundomOper(operators);
  const answer = String(getTypeOfCulc(number1, number2, randomOper));
  const question = `${number1} ${randomOper} ${number2}`;
  return [question, answer];
};

const brainCalc = () => playTheGame(calcCondition, getNewRound);

export default brainCalc;
