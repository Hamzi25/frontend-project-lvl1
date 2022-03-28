// eslint-disable-next-line import/no-relative-packages
import readlineSync from '/home/hamza/frontend-project-lvl1/readline-sync/lib/readline-sync';

const userName = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
};

export default userName;
