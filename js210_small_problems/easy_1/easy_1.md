##### JS210 - Small Problems > Easy 1

---

## 1. Odd Numbers

Log all odd numbers from `1` to `99`, inclusive, to the console, with each number on a separate line.

###### My Solution

```javascript
for (let oddNumber = 1; oddNumber <= 99; oddNumber += 2) {
  console.log(oddNumber);
}
```

###### Further Exploration

```javascript
let rlSync = require('readline-sync');


let start = Number(rlSync.question('Specify a starting number: '));
let end = Number(rlSync.question('Specify an ending number: '));

for (let number = start; number <= end; number += 1) {
  if (number % 2 === 0) {
    continue;
  }

  console.log(number);
}
```

---

## 2. Even Numbers

Log all even numbers from `1` to `99`, inclusive, to the console, with each number on a separate line.

###### My Solution

```javascript
for (let evenNumber = 2; evenNumber <= 99; evenNumber += 2) {
  console.log(evenNumber);
}
```

---

## 3. How Big is the Room

Build a program that asks the user to enter the length and width of a room in meters, and then logs the area of the room to the console in both square meters and square feet.

Note: 1 square meter == 10.7639 square feet

Do not worry about validating the input at this time. Use the `readlineSync.prompt` method to collect user input.

Example:

```
Enter the length of the room in meters:
10
Enter the width of the room in meters:
7
The area of the room is 70.00 square meters (753.47 square feet).
```

###### My Solution

```javascript
let rlSync = require('readline-sync');

console.log('Enter the length of the room in meters:');
let length = rlSync.prompt();
console.log('Enter the width of the room in meters:');
let width = rlSync.prompt();

let conversionFactor = 10.7639;

let roomAreaInMeters = length * width;
let roomAreaInFeet = roomAreaInMeters * conversionFactor;

let textOutput = `The area of the room is ${roomAreaInMeters.toFixed(2)} \
square meters (${roomAreaInFeet.toFixed(2)} square feet).`
  
console.log(textOutput);
```

###### LS Solution

```javascript
let readlineSync = require("readline-sync");

const SQMETERS_TO_SQFEET = 10.7639;

console.log("Enter the length of the room in meters:");
let length = readlineSync.prompt();
length = parseInt(length, 10);

console.log("Enter the width of the room in meters:");
let width = readlineSync.prompt();
width = parseInt(width, 10);

let areaInMeters = (length * width);
let areaInFeet = (areaInMeters * SQMETERS_TO_SQFEET);

console.log(
	`The area of the room is ${areaInMeters.toFixed(2)} square meters (${areaInFeet.toFixed(2)} square feet).`)
```

###### Further Exploration

Modify the program so that it asks the user for the input type (meters or feet). Compute for the area accordingly, and log it and its conversion in parentheses.

```javascript
let rlSync = require('readline-sync');

let inputType;
let testCondition = true

do {
  console.log('Input in meters or feet?');
  inputType = rlSync.prompt();
  if (inputType === 'meters' || inputType === 'feet') {
    testCondition = false;
  }
} while (testCondition);

console.log(`Enter the length of the room in ${inputType}:`);
let length = rlSync.prompt();
length = parseInt(length, 10);

console.log(`Enter the width of the room in ${inputType}:`);
let width = rlSync.prompt();
width = parseInt(width, 10);

let conversionFactor = 10.7639;

let areaInMeters;
let areaInFeet;

if (inputType === 'meters') {
  areaInMeters = length * width;
  areaInFeet = areaInMeters * conversionFactor;
} else {
  areaInFeet = length * width;
  areaInMeters = areaInFeet / conversionFactor;
}

let textOutput = `The area of the room is ${areaInMeters.toFixed(2)} \
square meters (${areaInFeet.toFixed(2)} square feet).`
  
console.log(textOutput);
```

---

## 4. Tip Calculator

Create a simple tip calculator. The program should prompt for a bill amount and a tip rate. The program must compute the tip, and then log both the tip and the total amount of the bill to the console. You can ignore input validation and assume that the user will put in numbers.  

Example:

```
What is the bill? 200
What is the tip percentage? 15

The tip is $30.00
The total is $230.00
```

###### My Solution

```javascript
let rlSync = require('readline-sync');

let amount = parseInt(rlSync.question('What is the bill? '), 10);
let tip = parseInt(rlSync.question('What is the tip percentage? '), 10);

let tipAmount = amount * (tip / 100);
let total = amount + tipAmount;

console.log(`The tip is $${tipAmount.toFixed(2)}`);
console.log(`The total is $${total.toFixed(2)}`);
```

###### LS Solution

```javascript
const bill = parseFloat(prompt('What is the bill?'));
const percentage = parseFloat(prompt('What is the percentage?'));

const tip = bill * (percentage / 100);
const total = bill + tip;

console.log(`The tip is $${tip.toFixed(2)}`);
console.log(`The total is $${total.toFixed(2)}`);
```

---

## 5. Sum or Product of Consecutive Integers

Write a program that asks the user to enter an integer greater than `0`, then asks if the user wants to determine the sum or the product of all numbers between `1` and the entered integer, inclusive.  

Examples:  

```
Please enter an integer greater than 0: 5
Enter "s" to compute the sum, or "p" to compute the product. s

The sum of the integers between 1 and 5 is 15.
```

```
Please enter an integer greater than 0: 6
Enter "s" to compute the sum, or "p" to compute the product. p

The product of the integers between 1 and 6 is 720.
```

###### My Solution

```javascript
const rlSync = require('readline-sync');

let loopCondition = true;
let integer;
let computationType;

do {
  integer = parseInt(rlSync.question('Please enter an integer greater than 0: '), 10);
  computationType = rlSync.question('Enter "s" to compute the sum, or "p" to compute the product. ');

  if (integer > 0 && (computationType === 's' || computationType === 'p')) {
    loopCondition = false;
  }
} while (loopCondition);

let accumulator = 1;

for (let index = 2; index <= integer; index += 1) {
  if (computationType === 's') {
    accumulator += index;
  } else {
    accumulator *= index;
  }
}

if (computationType === 's') {
  console.log(`The sum of the integers between 1 and ${integer} is ${accumulator}.`)
} else {
  console.log(`The product of the integers between 1 and ${integer} is ${accumulator}.`)
}
```

###### LS Solution

```javascript
function computeSum(number) {
  let total = 0;
  
  for (let i = 1; i <= number; i += 1) {
    total += 1;
  }
  
  return total;
}

function computeProduct(number) {
  let total = 1;
  
  for (let i = 1; i <= number; i += 1) {
    total *= i;
  }
  
  return total;
}

const number = parseInt(prompt('Please enter an integer greater than 0'), 10);
const operation = prompt('Enter "s" to compute the sum, or "p" to compute the product.');

if (operation === 's') {
  let sum = String(computeSum(number));
  console.log(`The sum of the integers between 1 and ${String(number)} is ${sum}.`);
} else if (operation === 'p') {
  let product = String(computeProduct(number));
  console.log(`The product of the integers between 1 and ${String(number)} is ${product}.`);
} else {
  console.log('Oops. Unknown operation.');
}
```

###### Further Exploration

What if the input was an array of integers instead of just a single integer? How would your `computeSum` and `computeProduct` functions change? Given that the input is an array, how might you make use of the [Array.prototype.reduce()](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce) method?

```javascript
function range(start, end) {
  let array = [];
  for (index = start; index <= end; index += 1) {
    array.push(index);
  }

  return array;
}

function computeSum(range) {
  return range.reduce((accumulator, currentValue) => accumulator + currentValue);
}

function computeProduct(range) {
  return range.reduce((accumulator, currentValue) => accumulator * currentValue);
}

const rlSync = require('readline-sync');

let loopCondition = true;
let integer;
let computationType;

do {
  integer = parseInt(rlSync.question('Please enter an integer greater than 0: '), 10);
  computationType = rlSync.question('Enter "s" to compute the sum, or "p" to compute the product. ');

  if (integer > 0 && (computationType === 's' || computationType === 'p')) {
    loopCondition = false;
  } else {
    console.log('Oops. Bad input. Try again.')
  }
} while (loopCondition);

if (computationType === 's') {
  let sum = computeSum(range(1, integer));
  console.log(`The sum of the integers between 1 and ${integer} is ${sum}.`);
} else {
  let product = computeProduct(range(1, integer));
  console.log(`The product of the integers between 1 and ${integer} is ${product}.`);
}
```

---

## 6. Short Long Short

