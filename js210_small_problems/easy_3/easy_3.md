##### JS210 - Small Problems > Easy 3

---

### 1. How Old is Teddy

Build a program that randomly generates Teddy's age, and logs it to the console. Have the age be a random number between `20` and `200` (inclusive).  

Example Output:

```
Teddy is 69 years old!
```

###### My Solution

```javascript
let teddysAge = function teddysAge() {
  let age = Math.floor(Math.random() * (201 - 20) + 20);

  console.log(`Teddy is ${age} years old!`)
}

teddysAge();
```

###### LS Solution

Hint:

- The `Math` object has a `random()` method that might be useful. Check out the [documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random) on MDN.
- How many possible numbers can be generated?
- How can you make sure that the numbers generated won't go below the minimum value?

```javascript
function randomBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const age = randomBetween(20, 200);
console.log(`Teddy is ${age} years old!`);
```

###### Discussion

The solution makes use of the `random()` method of the `Math` object. The `random()` method generates a random floating-point number between `0` (inclusive) and `1` (exclusive). To have the random number be between `20` and `200`, the solution uses the function `randomBetween`. It takes a `min` and a `max` value as arguments.  

The first part of the expression returned by `randomBetween` function, `Math.floor(Math.random() * (max - min + 1))`, generates a number based on the range (distance) between the `max` and the `min`. If the arguments passed are `20` and `200`, there are 181 possible values, starting from `0` up to `180`.  

The second part, `+ min;`, which completes the expression, offsets the current value so that the number returned falls within the range of the arguments passed.  

Finally, the `Math.floor()` method turns the generated number into an integer. The method takes a number and reduces it to the next lower integer, effectively truncating any digits following the decimal point.

###### Further Exploration

The `randomBetween` function used the `Math.floor()` method. Would it make a difference if the `Math.round()` method was used instead?  

Also, how can we make the function more robust? What if the user inadvertently gave the inputs in reverse order (i.e., the value passed to `min` was greater than `max`)?  

###### My FE Solution

Yes, it would make a difference if we used the `Math.round()` function instead of the `Math.floor()` function. The reason is that the `Math.round()` function will round to the nearest integer, which means we may get a value outside the range, that is we could get a value of `181` and then when the offset of `20` is added we would end up with `201`, which is outside the acceptable range.  

For the second part, we could do something like this...

```javascript
function randomBetween(min, max) {
  if (min > max) {
    [min, max] = [max, min];
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const age = randomBetween(20, 200);
console.log(`Teddy is ${age} years old!`);
```

---

### 2. Searching 101

Write a program that solicits six numbers from the user, then logs a message that describes whether or not the sixth number appears amongst the first five numbers.  

Examples:

```
Enter the 1st number: 25
Enter the 2nd number: 15
Enter the 3rd number: 20
Enter the 4th number: 17
Enter the 5th number: 23
Enter the last number: 17

The number 17 appears in [25, 15, 20, 17, 23].

-----

Enter the 1st number: 25
Enter the 2nd number: 15
Enter the 3rd number: 20
Enter the 4th number: 17
Enter the 5th number: 23
Enter the last number: 18

The number 18 does not appear in [25, 15, 20, 17, 23].
```

###### My Solution

```javascript
const numberWithSuffix = ['1st', '2nd', '3rd', '4th', '5th'];
let numbers = [];

for (i = 0; i < numberWithSuffix.length; i += 1) {
  let message = `Enter the ${numberWithSuffix[i]} number: `;
  let number = parseInt(prompt(message), 10);
  numbers.push(number);
}

let lastNumber = parseInt(prompt('Enter the last number: '), 10);

if (numbers.includes(lastNumber)) {
  console.log(`The number ${lastNumber} appears in [${numbers.join(', ')}].`);
} else {
  console.log(`The number ${lastNumber} does not appear in [${numbers.join(', ')}].`)
}
```

###### LS Solution

```javascript
const numbers = [];

numbers.push(prompt('Enter the 1st number:'));
numbers.push(prompt('Enter the 2nd number:'));
numbers.push(prompt('Enter the 3rd number:'));
numbers.push(prompt('Enter the 4th number:'));
numbers.push(prompt('Enter the 5th number:'));

let lastNumber = prompt('Enter the last number:');

if (numbers.includes(lastNumber)) {
  console.log(`The number ${lastNumber} appears in [${numbers.join(', ')}].`);
} else {
  console.log(`The number ${lastNumber} does not appear in [${numbers.join(', ')}].`);
}
```

###### Discussion

The solution consecutively asks the user for a number and pushes it into the `numbers` array declared at the top. The solution uses [Array](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array) methods. Notice, in particular, the use of the `Array.prototype.includes` method to test whether a number is included in the set of numbers. Be sure to check out the documentation to have a better understanding of the available methods.  

###### Further Exploration

What if the problem was looking for a number that satisfies some condition (e.g., a number greater than `25`), instead of a specific number? Would the current solution still work? Why or why not? Think about this first before scrolling down.  

Possible Solution:

```javascript
function isIncluded(arr, val) {
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] > val) {
      return true;
    }
  }

  return false;
}
```

Explore the `Array.prototype.some` method, and see if you can change the possible solution shown above to make use of that method instead.

###### My FE Solution

```javascript
const greaterThan = (element) => lastNumber > element;
```

With the rest of code...

```javascript
const numberWithSuffix = ['1st', '2nd', '3rd', '4th', '5th'];
let numbers = [];

for (i = 0; i < numberWithSuffix.length; i += 1) {
  let message = `Enter the ${numberWithSuffix[i]} number: `;
  let number = parseInt(prompt(message), 10);
  numbers.push(number);
}

let lastNumber = parseInt(prompt('Enter the last number: '), 10);

const greaterThan = (element) => element > lastNumber;

if (numbers.some(greaterThan)) {
  console.log(`At least one number in [${numbers.join(', ')}] is greater than ${lastNumber}.`);
} else {
  console.log(`The number ${lastNumber} is greater than every number in [${numbers.join(', ')}].`);
}
```

---

### 3. When Will I Retire

Build a program that logs when the user will retire and how many more years the user has to work until retirement.  

```
What is your age? 30
At what age would you like to retire? 70

It's 2017. You will retire in 2057.
You have only 40 years of work to go!
```

###### My Solution

```javascript
let age = parseInt(prompt('What is your age?'), 10);
let retirementAge = parseInt(prompt('At what age would you like to retire?'), 10);

let yearsToRetirement = retirementAge - age;

let date = new Date();
let year = date.getFullYear();
let retirementYear = year + yearsToRetirement;

console.log(`It's ${year}. You will retire in ${retirementYear}.`);
console.log(`You have only ${yearsToRetirement} years of work to go!`);
```

###### LS Solution

Use the `Date` object of JavaScript.

###### Solution

```javascript
const age = parseInt(prompt('What is your age?'), 10);
const retirementAge = parseInt(prompt('At what age would you like to retire?'), 10);

const today = new Date();

const currentYear = today.getFullYear();
const workYearsToGo = retirementAge - age;
const retirementYear = currentYear + workYearsToGo;

console.log(`It's ${currentYear}. You will retire in ${retirementYear}.`);
console.log(`You have only ${workYearsToGo} years of work to go!`);
```

###### Discussion

The solution makes use of the `Date` object. It uses the `Date.prototype.getFullYear` method to return the `year` value of the `Date` object that was created. Note that there is also `Date.prototype.getYear` method available in the `Date` object, which returns a 2-3 digit representation of the year (the `getYear` method is deprecated, so it's best to avoid using it).  

With the use of the `getFullYear` method, the solution gets the `currentYear`. It then computes the value of `workYearsToGo` by subtracting the current `age` from the `retirementAge`. Then to get the `retirementYear`, it adds the `currentYear` to the number of `workYearsToGo`.  

###### Further Exploration

What would happen if the `new` keyword wasn't used in defining the `today` variable on line 4?  

###### My FE Solution

If the `new` keyword wasn't used in defining the `today` variable on line 4, then the `today` variable would be assigned a string representation of the value returned by `Date()`, rather than a date object.

---

### 4. Palindromic Strings Part 1

Write a function that returns `true` if the string passed as an argument is a palindrome, or `false` otherwise. A palindrome reads the same forwards and backwards. For this problem, the case matters and all characters matter.  

```javascript
isPalindrome('madam');               // true
isPalindrome('Madam');               // false (case matters)
isPalindrome("madam i'm adam");      // false (all characters matter)
isPalindrome('356653');              // true
```

###### My Solution

```javascript
function isPalindrome(text) {
  let textArray = text.split('');
  let reversedText = textArray.reverse().join('');

  return text === reversedText;
}
```

###### LS Solution

```javascript
function isPalindrome(string) {
  return string === string.split('').reverse().join('');
}
```

###### Discussion

The solution leverages the `Array.prototype.reverse` and `Array.prototype.join` methods of the `Array` object by converting the `string` input into an array using the `String.prototype.split` method.  

With the use of these methods, the solution is straightforward.

---

### 5. Palindromic Strings Part 2

Write another function that returns `true` if the string passed as an argument is a palindrome, or `false` otherwise. This time, however, your function should be case-insensitive, and should ignore all non-alphanumeric characters. If you wish, you may simplify things by calling the `isPalindrome` function you wrote in the previous exercise.  

Examples:

```javascript
isRealPalindrome('madam');               // true
isRealPalindrome('Madam');               // true (case does not matter)
isRealPalindrome("Madam, I'm Adam");     // true (only alphanumerics matter)
isRealPalindrome('356653');              // true
isRealPalindrome('356a653');             // true
isRealPalindrome('123ab321');            // false
```

###### My Solution

```javascript
function isPalindrome(text) {
  let textArray = text.split('');
  let reversedText = textArray.reverse().join('');

  return text === reversedText;
}

function isRealPalindrome(text) {
  let lowerCaseText = text.toLowerCase();
  let regex = /[a-z0-9]/;

  let alphaNumericText = '';

  for (i = 0; i < lowerCaseText.length; i += 1) {
    if (lowerCaseText[i].match(regex)) {
      alphaNumericText += lowerCaseText[i];
    }
  }

  return isPalindrome(alphaNumericText);
}
```

###### LS Solution

```javascript
function isRealPalindrome(string) {
  string = removeNonLetterNumbers(string.toLowerCase());
  return isPalindrome(string);
}

function removeNonLetterNumbers(string) {
  let result = '';

  for (let i = 0; i < string.length; i += 1) {
    if (isLetter(string[i]) || isNumber(string[i])) {
      result += string[i];
    }
  }

  return result;
}

function isLetter(char) {
  return char >= 'a' && char <= 'z';
}

function isNumber(char) {
 return char >= '0' && char <= '9';
}
```

###### Discussion

The first part of the solution makes all characters lowercased. The second uses the `removeNonLetterNumbers` function to replace any characters that are not alphanumeric, using two helper functions that check for either a letter or number, respectively. The solution relies on this to clean up the characters that are not subject to comparison. It then uses the `isPalindrome` function from the previous exercise.  

Recall that strings are compared based on standard lexicographical ordering, using Unicode values.  

---

### 6. Palindromic Number

