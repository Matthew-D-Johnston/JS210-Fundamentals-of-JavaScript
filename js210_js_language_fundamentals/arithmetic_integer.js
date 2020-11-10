// My Solution

// let first_number = Number(prompt('Enter the first number:\n'));
// let second_number = Number(prompt('Enter the second number:\n'));

// console.log(`${first_number} + ${second_number} = ${first_number + second_number}`);
// console.log(`${first_number} - ${second_number} = ${first_number - second_number}`);
// console.log(`${first_number} * ${second_number} = ${first_number * second_number}`);
// console.log(`${first_number} / ${second_number} = ${first_number / second_number}`);
// console.log(`${first_number} % ${second_number} = ${first_number % second_number}`);
// console.log(`${first_number} ** ${second_number} = ${first_number ** second_number}`);

// LS Solution

const readlineSync = require("readline-sync");

console.log("Enter the first number:");
let firstNumber = Number(readlineSync.prompt());
console.log("Enter the second number:");
let secondNumber = Number(readlineSync.prompt());

console.log(`${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber}`);
console.log(`${firstNumber} - ${secondNumber} = ${firstNumber - secondNumber}`);
console.log(`${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber}`);
console.log(`${firstNumber} / ${secondNumber} = ${Math.floor(firstNumber / secondNumber)}`);
console.log(`${firstNumber} % ${secondNumber} = ${firstNumber % secondNumber}`);
console.log(
  `${firstNumber} ** ${secondNumber} = ${Math.pow(firstNumber, secondNumber)}`
);
