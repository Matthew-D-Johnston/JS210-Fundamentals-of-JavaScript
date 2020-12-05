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

Write a function that takes two strings as arguments, determines the longer of the two strings, and then returns the result of concatenating the shorter string, the longer string, and the shorter string once again. You may assume that the strings are of different lengths.  

Examples:  

```javascript
shortLongShort('abc', 'defgh'); 		// "abcdefghabc"
shortLongShort('abcde', 'fgh');		 	// "fghabcdefgh"
shortLongShort('', 'xyz'); 					// "xyz"
```

###### My Solution

```javascript
function shortLongShort(word1, word2) {
  let length1 = word1.length;
  let length2 = word2.length;

  if (length1 < length2) {
    return word1 + word2 + word1;
  } else {
    return word2 + word1 + word2;
  }
}
```

###### LS Solution

```javascript
function shortLongShort(string1, string2) {
  if (string1.length > string2.length) {
    return string2 + string1 + string2;
  } else {
    return string1 + string2 + string3;
  }
}
```

---

## 7. Leap Years Part 1

In the modern era under the Gregorian Calendar, leap years occur in every year that is evenly divisible by 4, unless the year is also divisible by 100. If the year is evenly divisible by 100, then it is not a leap year, unless the year is also evenly divisible by 400.  

Assume this rule is valid for any year greater than year 0. Write a function that takes any year greater than 0 as input, and returns `true` if the year is a leap year, or `false` if it is not a leap year.  

Examples:

```javascript
isLeapYear(2016);      // true
isLeapYear(2015);      // false
isLeapYear(2100);      // false
isLeapYear(2400);      // true
isLeapYear(240000);    // true
isLeapYear(240001);    // false
isLeapYear(2000);      // true
isLeapYear(1900);      // false
isLeapYear(1752);      // true
isLeapYear(1700);      // false
isLeapYear(1);         // false
isLeapYear(100);       // false
isLeapYear(400);       // true
```

###### My Solution

```javascript
function isLeapYear(year) {
  if (year % 400 === 0) {
    return true;
  } else if (year % 100 === 0) {
    return false;
  } else if (year % 4 === 0) {
    return true;
  } else {
    return false;
  }
}
```

###### LS Solution

```javascript
function isLeapYear(year) {
  if (year % 400 === 0) {
    return true;
  } else if (year % 100 === 0) {
    return false;
  } else {
    return year % 4 === 0;
  }
}
```

A shorter solution

```javascript
const isLeapYear = (year) => (year % 400 === 0) || (year % 4 === 0 && year % 100 !=== 0);
```

###### Further Exploration

The order in which you perform tests for a leap year calculation is important. For what years will `isLeapYear` fail if you rewrite it as shown below?

```javascript
function isLeapYear(year) {
  if (year % 100 === 0) {
    return false;
  } else if (year % 400 === 0) {
    return true;
  } else {
    return year % 4 === 0;
  }
}
```

It will fail for any year that is divisible by 400, since any year divisible by 400 is also divisible by 100 and the first condition will return `true` so that the function returns `false`.  

Can you rewrite `isLeapYear` to perform its tests in the opposite order of the above solution? That is, test whether the year is divisible by 4 first, then, if necessary, test whether it is divisible by 100, and finally, if necessary, test whether it is divisible by 400. Is this solution simpler or more complex than the original solution?

```javascript
function isLeapYear(year) {
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        return true;
      }
      return false;
    }
    return true;
  }
  return false;
}
```

This solution feels a little bit more complex to read.

---

## 8. Leap Years Part 2

This is a continuation of the previous exercise.  

The British Empire adopted the Gregorian Calendar in 1752, which was a leap year. Prior to 1752, they used the Julian Calendar. Under the Julian Calendar, leap years occur in any year that is evenly divisible by 4.  

Using this information, update the function from the previous exercise to determine leap years both before and after 1752.  

Examples:  

```javascript
isLeapYear(2016);      // true
isLeapYear(2015);      // false
isLeapYear(2100);      // false
isLeapYear(2400);      // true
isLeapYear(240000);    // true
isLeapYear(240001);    // false
isLeapYear(2000);      // true
isLeapYear(1900);      // false
isLeapYear(1752);      // true
isLeapYear(1700);      // true
isLeapYear(1);         // false
isLeapYear(100);       // true
isLeapYear(400);       // true
```

###### My Solution

```javascript
function isLeapYear(year) {
  if (year < 1752) {
    return year % 4 === 0;
  } else {
    if (year % 400 === 0) {
      return true;
    } else if (year % 100 === 0) {
      return false;
    } else if (year % 4 === 0) {
      return true;
    } else {
      return false;
    }
  }
}
```

###### LS Solution

```javascript
function isLeapYear(year) {
  if (year < 1752 && year % 4 === 0) {
    return true;
  } else if (year % 400 === 0) {
    return true;
  } else if (year % 100 === 0) {
    return false;
  } else {
    return year % 4 === 0;
  }
}
```

---

## 9. Multiples of 3 and 5

Write a function that computes the sum of all numbers between `1` and some other number, inclusive, that are multiples of `3` or `5`. For instance, if the supplied number is `20`, the result should be `98` (`3 + 5 + 6 + 9 + 10 + 12 + 15 + 18 + 20`).  

You may assume that the number passed in is an integer greater than `1`.  

Examples:  

```javascript
multisum(3);				// 3
multisum(5);				// 8
multisum(10); 			// 33
multisum(1000);			// 234168
```

###### My Solution

```javascript
function multisum(number) {
  let sum = 0;

  for (let index = 1; index <= number; index += 1) {
    if (index % 3 === 0 || index % 5 === 0) {
      sum += index;
    }
  }

  return sum;
}
```

###### LS Solution

```javascript
function isMultiple(number, divisor) {
  return number % divisor === 0;
}

function multisum(maxValue) {
  let sum = 0;
  
  for (let number = 1; number <= maxValue; number += 1) {
    if (isMultiple(number, 3) || is Multiple(number, 5)) {
      sum += number;
    }
  }
  
  return sum;
}
```

---

## 10. ASCII String Value

Write a function that determines and returns the ASCII string value of a string passed in as an argument. The ASCII string value is the sum of the ASCII values of every character in the string. (You may use `String.prototype.charCodeAt()` to determine the ASCII value of a character.)  

Examples:  

```javascript
asciiValue('Four score');         // 984
asciiValue('Launch School');      // 1251
asciiValue('a');                  // 97
asciiValue('');                   // 0
```

###### My Solution

```javascript
function asciiValue(string) {
  let asciiSum = 0;

  for (let index = 0; index < string.length; index += 1) {
    asciiSum += string.charCodeAt(index);
  }

  return asciiSum;
}
```

###### LS Solution

```javascript
function asciiValue(string) {
  let sum = 0;
  
  for (let i = 0; i < string.length; i += 1) {
    sum += string.charCodeAt(i);
  }
  
  return sum;
}
```

