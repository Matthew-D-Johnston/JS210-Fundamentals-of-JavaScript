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