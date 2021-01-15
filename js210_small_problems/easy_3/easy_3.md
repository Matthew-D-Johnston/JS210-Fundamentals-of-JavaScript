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

Write a function that returns `true` if its integer argument is palindromic, or `false` otherwise. A palindromic number reads the same forwards and backwards.  

Examples:  

```javascript
isPalindromicNumber(34543);        // true
isPalindromicNumber(123210);       // false
isPalindromicNumber(22);           // true
isPalindromicNumber(5);            // true
```

###### My Solution

```javascript
function isPalindrome(text) {
  let textArray = text.split('');
  let reversedText = textArray.reverse().join('');

  return text === reversedText;
}

function isPalindromicNumber(number) {
  return isPalindrome(String(number));
}
```

###### LS Solution

```javascript
function isPalindromicNumber(number) { return isPalindrome(String(number)) }
```

###### Discussion

The hardest part of this exercise is recognizing that the easiest way to tell if a number is palindromic is by first converting it to a string, and then checking if that string is palindromic. Realizing this, the solution just uses the `isPalindrome` function from the previous exercise.  

###### Further Exploration

Suppose the number argument begins with one or more `0`s. Will the solution still work? Why or why not? Is there any way to address this?  

###### My FE Solution

No, the solution will not work. Numbers beginning with zero are treated as having an octal base. Octal literals are not allowed in _strict mode_.  

---

### 7. Running Totals

Write a function that takes an array of numbers, and returns an array with the same number of elements, with each element's value being the running total from the original array.  

Examples:  

```javascript
runningTotal([2, 5, 13]);             // [2, 7, 20]
runningTotal([14, 11, 7, 15, 20]);    // [14, 25, 32, 47, 67]
runningTotal([3]);                    // [3]
runningTotal([]);                     // []
```

###### My Solution

```javascript
function runningTotal(numbers) {
  if (numbers[0] === undefined) {
    return [];
  }
  
  let currentTotal = numbers[0];
  let totals = [currentTotal];

  for (let index = 1; index < numbers.length; index += 1) {
    currentTotal += numbers[index];
    totals.push(currentTotal);
  }

  return totals;
}
```

###### LS Solution

```javascript
function runningTotal(array) {
  const resultArray = [];
  let sum = 0;
  
  for (let i = 0; i < array.length; i += 1) {
    sum += array[i];
    resultArray.push(sum);
  }
  
  return resultArray;
}
```

###### Discussion

The solution makes use of an array and a number variable. The array, `resultArray`, stores the values of the running total, while `sum` keeps track of the current value as we move through each item in the original `array` argument. During each iteration, the solution updates the value of `sum`, incrementing it by the value at the current index of the input `array`.  

###### Further Exploration

Can you rewrite the solution using the `Array.prototype.map` method? What types of problems do you think are well-suited for the `Array.prototype.map` method?  

###### My FE Solution

```javascript
function runningTotal(numbers) {
  let sum = 0;
  return numbers.map(number => sum += number);
}
```

The types of problem that are suited for the `Array.prototype.map` method are ones that take an array and need to return an array populated with some variation of the individual elements of the original array.

---

### 8. Letter Swap

Given a string of words separated by spaces, write a function that swaps the first and last letters of every word.  

You may assume that every word contains at least one letter, and that the string will always contain at least one word. You may also assume that each string contains nothing but words and spaces, and that there are no leading, trailing, or repeated spaces.  

Examples:  

```javascript
swap('Oh what a wonderful day it is');  // "hO thaw a londerfuw yad ti si"
swap('Abcde');                          // "ebcdA"
swap('a');                              // "a"
```

###### My Solution

```javascript
function swap(text) {
  let words = text.split(' ');

  for (let index = 0; index < words.length; index += 1) {
    let word = words[index];

    if (word.length > 1) {
      let firstLetter = word[0];
      let lastLetter = word[word.length - 1];
      let wordMiddle = word.slice(1, word.length - 1)
      words[index] = lastLetter + wordMiddle + firstLetter;
    }
  }

  return words.join(' ');
}
```

###### LS Solution

```javascript
function swap(words) {
  const wordsArray = words.split(' ');
  
  for (let i = 0; i < wordsArray.length; i += 1) {
    wordsArray[i] = swapFirstLastCharacters(wordsArray[i]);
  }
  
  return wordsArray.join(' ');
}

function swapFirstLastCharacters(word) {
  if (word.length === 1) {
    return word;
  }
  
  return word[word.length - 1] + word.slice(1, -1) + word[0];
}
```

###### Discussion

The solution splits the string into words using a space `( )` as a separator. It then iterates through all of the words and produces an array of modified words. It then applies `Array.prototype.join` to that array to produce the return value.  

The tricky part is the swapping of the first and last characters. During the iteration, the `swapFirstLastCharacters` function handles this. The function takes a `word` argument and returns the swapped word. The swap happens by building a string composed of the last character (`word[word.length - 1]`), the middle characters (`word.slice(1, -1)`), and the first character (`word[0]`). The function also has a guard clause that checks if the `word` argument is only a single character; if it is, it immediately returns that value since it does not need to swap the letters.  

The solution uses the `String.prototype.slice` method. If you haven't seen this method before, you may refer to the following:

- [MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice)
- [Build your own slice method exercise](https://launchschool.com/lessons/e2c71a47/assignments/74373a7e) -- this is for an array, but it's very similar

###### Further Exploration

How can you refactor this problem using the `Array.prototype.map` method instead?

###### My FE Solution

```javascript
function swapFirstLastCharacters(word) {
  if (word.length === 1) {
    return word;
  }

  return word[word.length - 1] + word.slice(1, -1) + word[0];
}

function swap(text) {
  let words = text.split(' ');

  let swapped = words.map(word => swapFirstLastCharacters(word));

  return swapped.join(' ');
}
```

---

### 9. Letter Counter Part 1

Write a function that takes a string consisting of one or more space separated words, and returns an object that shows the number of words of different sizes.  

Words consist of any sequence of non-space characters.  

Examples:  

```javascript
wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 1, "7": 2 }
wordSizes("What's up doc?");                              // { "2": 1, "4": 1, "6": 1 }
wordSizes('');                                            // {}
```

###### My Solution

##### Algorithm

* Split into array of separate words.
* Count letters in each word; this number will become a key in the object array.
* Create object.
* Iterate over the array of words; if a key does not exist, add it and initialize with a value of 1; if it does exist, increment by 1.

```javascript
function wordSizes(text) {
  let words = text.split(' ');
  let sizes = {};

  if (text === '') {
    return {};
  }

  for (let i = 0; i < words.length; i += 1) {
    let size = words[i].length;

    if (sizes[size]) {
      sizes[size] += 1;
    } else {
      sizes[size] = 1;
    }
  }

  return sizes;
}
```

###### LS Solution

```javascript
function wordSizes(words) {
  const wordsArray = words.split(' ');
  const count = {};
  
  for (let i = 0; i < wordsArray.length; i += 1) {
    let wordSize = wordsArray[i].length;
    if (wordSize === 0) {
      continue;
    }
    
    count[wordSize] = count[wordSize] || 0;
    count[wordSize] += 1;
  }
  
  return count;
}
```

###### Discussion

The goal of this exercise is to count the number of words of each size. To do that, the solution first obtains a list of words by splitting the `words` argument string into an array of words. Computing the size of a word is easy, but incrementing the count for that word size is slightly trickier.  

The solution stores the counts of word sizes as properties of the `count` object. It does this by iterating over the list of words and performing the following:  

1. Initialize the `wordSize` variable to the `length` of the current word.
2. Check if `wordSize` is equal to `0`. If yes, proceed immediately to the next iteration since there is no need to account for words of zero length.
3. Initialize the property for the current `wordSize` in the `count` object. If the property does not exist (i.e., `count[wordSize]` evaluates to `undefined`), set it to `0`.
4. Increment the count for a particular `wordSize` by `1`.

---

### 10. Letter Count Part 2

Modify the `wordSizes` function from the previous exercise to exclude non-letters when determining word size. For instance, the word size of `"it's"` is `3`, not `4`.

Examples: 

```javascript
wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 2 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 3 }
wordSizes("What's up doc?");                              // { "5": 1, "2": 1, "3": 1 }
wordSizes('');                                            // {}
```

###### My Solution

```javascript
function wordSizes(text) {
  let words = text.split(' ');
  let sizes = {};

  for (let i = 0; i < words.length; i += 1) {
    let onlyAlphaChars = words[i].match(/[a-z]/ig) || [];
    let size = onlyAlphaChars.length;

    if (size === 0) {
      continue;
    }

    sizes[size] = sizes[size] || 0;
    sizes[size] += 1;
  }

  return sizes;
}
```

###### LS Solution

```javascript
function wordSizes(words) {
  const wordsArray = words.split(' ');
  const count = {};
  
  for (let i = 0; i < wordsArray.length; i += 1) {
    let cleanWordSize = removeNonLetters(wordsArray[i].toLowerCase()).length;
    if (cleanWordSize === 0) {
      continue;
    }
    
    count[cleanWordSize] = count[cleanWordSize] || 0;
    count[cleanWordSize] += 1;
  }
  
  return count;
}

function removeNonLetters(string) {
  let result = '';
  
  for (let i = 0; i < string.length; i += 1) {
    if (isLetter(string[i])) {
      result += string[i];
    }
  }
  
  return result;
}

function isLetter(char) {return char >= 'a' && char <= 'z' };
```

###### Discussion

The only change this solution makes to the function, is to make sure that it does not count non-letter characters in determining word sizes. It does this by first removing all non-letter characters from each word using the `removeNonLetters` function. Then it performs the tallying of the word sizes.

