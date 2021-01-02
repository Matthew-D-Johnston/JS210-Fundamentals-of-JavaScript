# JS210 - JavaScript Language Fundamentals

## JavaScript Basics

### 1. Building Strings

The intention of the program below is to output a paragraph. Copy and paste the program into a JavaScript console (e.g., from the Chrome Developer Tools), then run it. Is the output what you expected? Are there any bugs/errors?

```javascript
const paragraph = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sed \
                ligula at risus vulputate faucibus. Aliquam venenatis nibh ut justo dignissim \
                dignissim. Proin dictum purus mollis diam auctor sollicitudin. Ut in bibendum \
                ligula. Suspendisse quam ante, dictum aliquam tristique id, porttitor pulvinar \
                diam. Maecenas blandit aliquet ipsum. Integer vitae sapien sed nulla rutrum \   
                hendrerit ac a urna. Interdum et malesuada fames ac ante ipsum primis in faucibus.';

console.log(paragraph);
```

###### My Solution

Yes, I received an `Uncaught SyntaxError: Invalid or unexpected token` message. I have no idea why.

---

### 2. Conditionals Part 1

Go over the following program. What does it log to the console at lines 7, 11, 15, and 19? Is it what you expected? Why or why not?

```javascript
const myBoolean = true;
const myString = 'hello';
const myArray = [];
const myOtherString = '';

if (myBoolean) {
  console.log('Hello');
}

if (!myString) {
  console.log('World');
}

if (!!myArray) {
  console.log('World');
}

if (myOtherString || myArray) {
  console.log('!');
}
```

###### My Solution

`Hello` is logged at line 7, nothing is logged at line 11, `World` is logged at line 15, and `!` is logged at line 19. All of the `if` conditional statements evaluate to true except for the one on line 10, which is why line 11 is not logged to the console.

###### LS Solution

```
Line 7: "Hello"
Line 11:
Line 15: "World"
Line 19: "!"
```

Recall that only the following six values are **falsy**:

* `false`
* `null`
* `undefined`
* `0`
* `NaN`
* `''`

All other values are **truthy**.

---

### 3. Conditionals Part 2

One of the ways to manage the flow of a program is through the use of conditionals. Go over the code below and specify how many unique execution paths are possible.

```javascript
if (condition1) {
  // ...
  if (condition2) {
    // ...
  } else {
    // ...
  }
} else {
  // ...
  if (condition4) {
    // ...
    if (condition5) {
      // ...
    }
  }
}
```

###### My Solution

I count five possible execution paths.

###### LS Solution

- Path 1: `condition1` --> `condition2`
- Path 2: `condition1` --> not `condition2`
- Path 3: not `condition1`
- Path 4: not `condition1` --> `condition4`
- Path 5: not `condition1` --> `condition4` --> `condition5`

---

### 4. String Assignment

Take a look at the following code:

```javascript
let name = 'Bob';
const saveName = name;
name = 'Alice';
console.log(name, saveName);
```

What does this code log to the console? Think about it for a moment before continuing.  

If you said that this code logged:

```
Alice Bob
```

you would be 100% correct, and the answer should come as no surprise. Now let's look at something slightly different:  

```javascript
const name = 'Bob';
const saveName = name;
name.toUpperCase();
console.log(name, saveName);
```

What does this code log? Can you explain these results?

###### My Solution

The code logs:

```
Bob Bob
```

The `toUpperCase()` method does not permanently mutate its caller. Thus, there is no permanent change to either `name` or `saveName`.

###### LS Solution

```
Bob Bob
```

If you were thinking that at least one or both of the names should be in uppercase, then you would be wrong. Don't worry though, you're not alone—especially if you come from other programming languages in which strings are mutable. In JavaScript however, primitive strings—such as the ones shown above—are immutable.

###### Further Exploration

If you take another look at the code, you'll notice that on line 3, the string referenced by the `name` variable calls the `String.prototype.toUpperCase` method. How is it possible that even though this string is a primitive, it's still able to call a method?

###### My Solution to FE

Essentially, the method allows us to pass the value that the `name` variable refers to and operate on it rather than the actual immutable variable. The method is not operating on a _reference_ to the actual variable, but a sort of copy of it.

---

### 5. Arithmetic Integer

Write a program that prompts the user for two positive integers, and then prints the results of the following operations on those two numbers: addition, subtraction, product, quotient, remainder, and power. Do not worry about validating the input.

```
==> Enter the first number:
23
==> Enter the second number:
17
==> 23 + 17 = 40
==> 23 - 17 = 6
==> 23 * 17 = 391
==> 23 / 17 = 1
==> 23 % 17 = 6
==> 23 ** 17 = 1.4105003956066297e+23
```

###### My Solution

```javascript
let first_number = Number(prompt('Enter the first number:\n'));
let second_number = Number(prompt('Enter the second number:\n'));

console.log(`${first_number} + ${second_number} = ${first_number + second_number}`);
console.log(`${first_number} - ${second_number} = ${first_number - second_number}`);
console.log(`${first_number} * ${second_number} = ${first_number * second_number}`);
console.log(`${first_number} / ${second_number} = ${first_number / second_number}`);
console.log(`${first_number} % ${second_number} = ${first_number % second_number}`);
console.log(`${first_number} ** ${second_number} = ${first_number ** second_number}`);
```

After inputting `23` for the first number and `17` for the second, this is what is logged to the console:

```
23 + 17 = 40
23 - 17 = 6
23 * 17 = 391
23 / 17 = 1.3529411764705883
23 % 17 = 6
23 ** 17 = 1.4105003956066297e+23
```

Everything is the same, except the calculated solution to `23 / 17`. Launch School has the solution as `1`.  

###### LS Solution

```javascript
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
```

---

### 6. Counting the Number of Characters

In this exercise, you will write a program that asks the user for a phrase, then outputs the number of characters in that phrase. Go over the [documentation for String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) to find an appropriate method to use.  

Examples:

```javascript
Please enter a phrase: walk
// console output
There are 4 characters in "walk".

Please enter a phrase: walk, don't run
// console output
There are 15 characters in "walk, don't run".
```

###### My Solution

```javascript
let readlineSync = require("readline-sync");

console.log('Please enter a phrase:');
let phrase = readlineSync.prompt();

console.log(`There are ${phrase.length} characters in "${phrase}".`);
```

###### LS Solution

```javascript
const input = prompt('Please enter a phrase:');
const numberOfCharacters = String(input.length);

console.log(`There are ${numberOfCharacters} characters in '${input}'.`);
```

###### Further Exploration

```javascript
let readlineSync = require("readline-sync");

console.log('Please enter a phrase:');

let phrase = readlineSync.prompt();
let regex = / /g;
let noSpacesPhrase = phrase.replace(regex, '');

let phraseLength = noSpacesPhrase.length;

console.log(`There are ${phraseLength} characters in "${phrase}".`);
```

---

### 7. Convert a String to a Number

For this exercise we're going to learn more about type conversion by implementing our own `parseInt` function that converts a string of numeric characters (including an optional plus or minus sign) to a number.  

The function takes a string of digits as an argument, and returns the appropriate number. Do not use any of the built-in functions for converting a string to a number type.  

For now, do not worry about leading `+` or `-` signs, nor should you worry about invalid characters; assume all characters will be numeric.  

Examples:

```javascript
stringToInteger('4321');      // 4321
stringToInteger('570');       // 570
```

###### My Solution

```javascript
function stringToInteger(numberStr) {
  let digits = numberStr.split('');
  let stringLength = numberStr.length;
  let multiplier = 1;

  for (let index = 1; index < stringLength; index += 1) {
    multiplier *= 10;
  }

  let integer = 0;

  for (let index = 0; index < stringLength; index += 1) {
    integer += digits[index] * multiplier;
    multiplier /= 10;
  }

  return integer;
}
```

###### LS Solution

```javascript
const DIGITS = {
  '0': 0, '1': 1, '2': 2, '3': 3, '4': 4,
  '5': 5, '6': 6, '7': 7, '8': 8, '9': 9,
}

function stringToInteger(string) {
  let value = 0;
  const numbers = stringToNumbers(string);
  
  for (let i = 0; i < numbers.length; i += 1) {
    value = 10 * value + numbers[i];
  }
  
  return value;
}

function stringToNumbers(string) {
  const result = [];
  
  for (let i = 0; i < string.length; i += 1) {
    result.push(DIGITS[string[i]]);
  }
  
  return result;
}
```

###### Discussion

The solution isn't one of the more concise ones, but it is explicit in its intention. The approach uses a `DIGITS` object as a lookup table to convert each of the digit characters into a digit number. The `stringToNumbers` function handles this conversion. The function iterates over every character and correspondingly gets the digit number equivalent. The `stringToNumbers` function returns an array of digit numbers.  

Using this array, the solution performs the computation of the value of the digits when put together. The actual computation of the numeric value of the `string` is strictly mechanical. The solution takes each digit and adds it to `10` times the previously calculated value, which quickly and easily gives the desired result. For example, if the digits are `4`, `3`, and `1`, then the final result is computed as follows: 

```javascript
10 * 0 + 4  --> 4
10 * 4 + 3  --> 43
10 * 43 + 1 --> 431
```

###### The Built-in Function

There are a number of built-in functions that you can use to convert a string to a number. For this one, let's have a look at `parseInt`. This [built-in function](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/parseInt) is called in the global/window context. It takes two arguments: a string and a radix.

```javascript
parseInt('E', 16);        // 14
parseInt('015', 10);      // 15
parseInt('F5');           // NaN
parseInt('F5', 16);       // 245
```

Compared to the built-in function, the one the solution implements is less robust. The built-in function is able to accurately convert from a wider range of string inputs via the radix parameter.

---

## 8. Convert a String to a Signed Number

The previous exercise mimics the `parseInt` function to a lesser extent. In this exercise, you're going to extend that function to work with signed numbers.  

Write a function that takes a string of digits, and returns the appropriate number as an integer. The string may have a leading `+` or `-` sign; if the first character is a `+`, your function should return a positive number; if it is a `-`, your function should return a negative number. If there is no sign, return a positive number.  

You may assume the string will always contain a valid number.  

Examples:

```javascript
stringToSignedInteger('4321');      // 4321
stringToSignedInteger('-570');      // -570
stringToSignedInteger('+100');      // 100
```

###### My  Solution

```javascript
function stringToSignedInteger(numberStr) {
  let sign = '';
  let digits = numberStr.split('');
  
  if (digits[0] === '+' || digits[0] === '-') {
    sign = digits.shift();
  }

  let numberOfDigits = digits.length;
  let multiplier = 1;

  for (let index = 1; index < numberOfDigits; index += 1) {
    multiplier *= 10;
  }

  let integer = 0;

  for (let index = 0; index < numberOfDigits; index += 1) {
    integer += digits[index] * multiplier;
    multiplier /= 10;
  }

  if (sign === '-') {
    integer *= -1;
  }

  return integer;
}
```

###### LS Solution

```javascript
function stringToSignedInteger(string) {
  switch (string[0]) {
    case '-': return -stringToInteger(string.slice(1));
    case '+': return stringToInteger(string.slice(1));
    default: return stringToInteger(string);
  }
}
```

###### Discussion

The solution reuses the `stringToInteger` function from the previous exercise. Why waste effort reinventing the wheel? (Oh, wait. That's exactly what we're doing, isn't it?)  

The solution is reasonably straightforward: it simply looks at the first character of the `string`, then reuses the function from the previous exercise. If the character is a `-`, then the solution just negates the result of the `stringToInteger` function. If the character is a `+` or if there is no sign, then the solution returns the result of `stringToInteger` as is.  

Note that the solution uses the expression, `string.slice(1)`, to obtain the remainder of the `string` after a leading `+` or `-`. This notation simply means to extract the characters starting from index `1` of the `string` up to and including the last character. When there is a second argument (e.g., `string.slice(1, 5)`), the `String.prototype.slice` method will extract the characters starting from index `1` up to but excluding index `5`.  

---

## 9. Convert a Number to a String

