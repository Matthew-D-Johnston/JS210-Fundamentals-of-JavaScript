"use strict";

let readlineSync = require('readline-sync');

console.log('Please enter an integer greater than 0: ');
let integer = Number(readlineSync.prompt());

console.log('Enter "s" to compute the sum, or "p" to compute the product. ');
let operationType = readlineSync.prompt();

let sum = 0;
let product = 1;

switch (operationType) {
  case 's':
    for (let index = 1; index <= integer; index += 1) {
      sum += index;
    }
    console.log(`The sum of the integers between 1 and ${integer} is ${sum}.`);
    break;
  case 'p':
    for (let index = 1; index <= integer; index += 1) {
      product *= index;
    }
    console.log(`The product of the integers between 1 and ${integer} is ${product}.`);
    break;
  default:
    console.log('Error: incorrect input.');
}
