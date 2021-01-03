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

In the previous two exercises, you developed functions that convert simple numeric strings to signed integers. In this exercise and the next, you're going to reverse those functions.  

You will learn more about converting strings to numbers by writing a function that takes a positive integer or zero, and converts it to a string representation.  

You may not use any of the standard conversion functions available in JavaScript, such as `String()`, `Number.prototype.toString`, or an expression such as `'' + number`. Your function should do this the old-fashioned way and construct the string by analyzing and manipulating the number.  

Examples:  

```javascript
integerToString(4321);      // "4321"
integerToString(0);         // "0"
integerToString(5000);      // "5000"
```

###### My Solution

```javascript
const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

function integerToString(num) {
  let digits = [];

  if (num === 0) {
    digits.push(0);
  }

  while (num !== 0) {
    let remainder = num % 10;
    digits.unshift(remainder);

    num -= remainder;
    num /= 10;
  }


  let stringInteger = '';
  for (let index = 0; index < digits.length; index += 1) {
    stringInteger += DIGITS[digits[index]];
  }

  return stringInteger;
}
```

###### LS Solution

```javascript
const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

function integerToString(number) {
  let result = '';
  
  do {
    let remainder = number % 10;
    number = Math.floor(number / 10);
    
    result = DIGITS[remainder] + result;
  } while (number > 0);
  
  return result;
}
```

The solution is somewhat similar to the `stringToInteger` function from earlier.  

Like in `stringToInteger`, this solution also uses a lookup table in the form of an array. In building the `DIGITS` lookup table, we just need to be mindful to align the string value to the array index position, so that when we do something like `DIGITS[5]`, we get the string representation of the index/number `5`.  

The tricky part of the solution is the "math" for getting the numbers digit by digit. The solution gets the rightmost digit (a one's digit) by getting the remainder of dividing the `number` by `10`. For instance, `4321 % 10` returns `1`. The solution then chops off the rightmost digit to get the next number by reassigning `number` to the result of `Math.floor(number / 10)`. Consequently, the `result` string is incrementally built by prepending the looked-up value, using the `remainder` as the index, to the previous value of `result`. This process repeats until the value of `number` becomes `0`.  

###### The Built-in Method

For this exercise, we looked at the [Number.prototype.toString](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toString) method. Compared to its counterpart approach of prepending an empty string (`''`) to a number, using `toString` is more explicit. It can also be called directly on any number.  

```javascript
(17).toString();        // "17"
(17).toString(2);       // "10001"
(17).toString(16);      // "11"
```

Notice when using the built-in method that parentheses enclose the number. This is necessary so that the JavaScript interpreter knows to use the number primitive as a `Number` object. As an object, it can access the built-in methods of `Number.prototype`. JavaScript's built-in method is also more powerful than the one the solution implemented. `toString` can take a radix value as an optional argument. Using the radix value, this method can convert any number to any base from base 2 up to base 36.  

One final note: the [Airbnb Style Guide](https://github.com/airbnb/javascript) calls for using the constructor Function `String()` in preference to `toString()`. The reason for this is twofold:  

- `String()` works with all types, including `null` and `undefined`, while `toString()` raises an exception in those cases.
- `String()` is guaranteed to return a string. This is not the case with `toString()` — individual objects can override `toString()` and they don't have to return a string.

---

## 10. Convert a Signed Number to a String

In the previous exercise, you reimplemented a function that converts non-negative numbers to strings. In this exercise, you're going to extend that function by adding the ability to represent negative numbers.  

You may not use any of the standard conversion functions available in JavaScript, such as `String()`, `Number.prototype.toString`, or an expression such as `'' + number`. You may, however, use the `integerToString` function from the previous exercise.  

Examples:  

```javascript
signedIntegerToString(4321);      // "+4321"
signedIntegerToString(-123);      // "-123"
signedIntegerToString(0);         // "0"
```

###### My Solution

```javascript
function signedIntegerToString(num) {
  if (num > 0) {
    return '+' + integerToString(num);
  } else if (num < 0) {
    return '-' + integerToString(Math.abs(num));
  } else {
    return '0';
  }
}
```

###### LS Solution

```javascript
function signedIntegerToString(number) {
  if (number < 0) {
    return ('-' + integerToString(-number));
  } else if (number > 0) {
    return ('+' + integerToString(number));
  } else {
    return integerToString(number);
  }
}
```

###### Discussion

This solution is similar to the `stringToSignedInteger` function from two exercises ago. This solution simply checks the sign of the `number`, then passes control to `integerToString` for the heavy lifting. One thing to notice is that when the `number` has a negative value, the solution multiplies the `number` by `-1` before passing it to the `integerToString` function. This is done to ensure that the math performed inside the `integerToString` function will work as expected.

