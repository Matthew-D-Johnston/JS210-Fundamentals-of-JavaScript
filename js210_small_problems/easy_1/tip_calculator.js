let rlSync = require('readline-sync');

let amount = parseFloat(rlSync.question('What is the bill? '), 10);
let tip = parseFloat(rlSync.question('What is the tip percentage? '), 10);

let tipAmount = amount * (tip / 100);
let total = amount + tipAmount;

console.log(`The tip is $${tipAmount.toFixed(2)}`);
console.log(`The total is $${total.toFixed(2)}`);
