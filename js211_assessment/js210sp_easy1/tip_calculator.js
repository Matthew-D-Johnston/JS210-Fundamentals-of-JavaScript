"use strict";

let readlineSync = require('readline-sync');

let billAmount = parseFloat(readlineSync.question('What is the bill? '), 10);
let tipPercentage = parseFloat(readlineSync.question('What is the tip percentage? '), 10);

let tip = billAmount * (tipPercentage / 100);
let total = billAmount + tip;

console.log(`The tip is $${tip.toFixed(2)}`);
console.log(`The total is $${total.toFixed(2)}`);
