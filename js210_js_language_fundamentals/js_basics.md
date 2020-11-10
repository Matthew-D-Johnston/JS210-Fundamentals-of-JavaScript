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







