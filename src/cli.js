import readlineSync from '../readline-sync/lib/readline-sync.js';

const userName = () => { 
    const name = readlineSync.question('May I have your name? '); 
    console.log(`Hello, ${name}!`); 
}; 
export default userName;