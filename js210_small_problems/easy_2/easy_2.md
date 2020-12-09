##### JS210 - Small Problems > Easy 2

---

## 1. Ddaaiillyy ddoouubbllee

Write a function that takes a string argument, and returns a new string that contains the value of the original string with all consecutive duplicate characters collapsed into a single character.  

Examples:

```javascript
crunch('ddaaiillyy ddoouubbllee');    // "daily double"
crunch('4444abcabccba');              // "4abcabcba"
crunch('ggggggggggggggg');            // "g"
crunch('a');                          // "a"
crunch('');                           // ""
```

###### My Solution

```javascript
function crunch(string) {
  let newString = '';

  for (let index = 0; index < string.length; index += 1) {
    if (string[index] !== string[index - 1]) {
      newString += string[index];
    }
  }

  return newString;
}
```

###### LS Solution

```javascript
function crunch(text) {
  let index = 0;
  let crunchText = '';
  
  while (index <= text.length - 1) {
    if (text[index] !== text[index + 1]) {
      crunchText += text[index]
    }
    
    index += 1;
  }
  
  return crunchText;
}
```

###### Further Exploration

You may have noticed that the solution continues iterating until `index` points past the end of the string. As a result, on the last iteration, `text[index]` is the last character in `text`, while `text[index + 1]` is `undefined`. Why does it do this? What happens if it stops iterating when `index` is equal to `text.length - 1`?  

It's also possible to solve this using regular expressions. For a nice challenge, give this a try with regular expressions. Can you think of any other solutions that don't use regular expressions?

###### My Solution

```javascript
function crunch(string) {
  let newString = string;

  for (let index = 0; index < string.length; index +=1) {
    let regex = RegExp(`${string[index]}{2,}`);
    newString = newString.replace(regex, string[index]);
  }

  return newString;
}
```

---

## 2. Bannerizer

Write a function that will take a short line of text, and write it to the console log within a box.  

Examples:

```javascript
logInBox('To boldy go where no one has gone before.');
```

will log on the console:

```
+--------------------------------------------+
|                                            |
| To boldly go where no one has gone before. |
|                                            |
+--------------------------------------------+
```

```javascript
logInBox('');
+--+
|  |
|  |
|  |
+--+
```

You may assume that the output will always fit in your browser window.

###### My Solution

```javascript
function logInBox(string) {
  let spacingSize = string.length + 2;
  let dashes = '-'.repeat(spacingSize);
  let spaces = ' '.repeat(spacingSize);

  console.log(`+${dashes}+`);
  console.log(`|${spaces}|`);
  console.log(`| ${string} |`);
  console.log(`|${spaces}|`);
  console.log(`+${dashes}+`);
}
```

###### LS Solution

```javascript
function logInBox(message) {
  const horizontalRule = `+${repeatChar('-', message.length + 2)}`;
  const emptyLine = `|${repeatChar(' ', message.length + 2)}|`;
  
  console.log(horizontalRule);
  console.log(emptyLine);
  console.log(`| ${message} |`);
  console.log(emptyLine);
  console.log(horizontalRule);
}

function repeatChar(char, times) {
  let repeated = '';
  while (repeated.length < times) {
    repeated += char;
  }
  
  return repeated;
}
```

To simplify matters, the solution starts out by creating two (2) variables and a helper function: `horizontalRule`, `emptyLine`, and `repeatChar()`. `horizontalRule` and `emptyLine` are strings that are used multiple times for creating the banner. The `repeatChar` function, on the other hand, adds the appropriate count of hyphens (`-`) and spaces (``) for the banner. The count is the same for both spaces and hyphens: the `length` of the `message` plus `2`. The extra spaces, one on each side of `emptyLine` and the `message` line, act as padding between the left and right sides of the banner.  

###### Further Exploration

Modify this function so that it truncates the `message` if it doesn't fit inside a maximum width provided as a second argument (the width is the width of the box itself). You may assume no maximum if the second argument is omitted. For a real challenge, try word wrapping messages that are too long to fit, so that they appear on multiple lines but are still contained within the box.  

###### My Solution no. 1

```javascript
function logInBox(string, maxWidth) {
  let width = 0;

  if (string.length < maxWidth) {
    width = string.length + 2;
  } else {
    width = maxWidth - 2;
    string = string.slice(0, width - 2)
  }

  let dashes = '-'.repeat(width);
  let spaces = ' '.repeat(width);

  console.log(`+${dashes}+`);
  console.log(`|${spaces}|`);
  console.log(`| ${string} |`);
  console.log(`|${spaces}|`);
  console.log(`+${dashes}+`);
}
```

###### My Solution no. 2

```javascript
function logInBox(string, maxWidth) {
  let width = 0;
  let stringLength = string.length;
  let stringSegments = [];

  if (stringLength < maxWidth) {
    width = stringLength + 2;
  } else {
    width = maxWidth - 4;
    let segments;

    if (stringLength % width === 0) {
      segments = parseInt(stringLength / width, 10);
    } else {
      segments = parseInt(stringLength / width, 10) + 1;
    }

    let startIndex = 0;
    let endIndex = width;
    let stringSegment;
    for (let segNumber = 1; segNumber <= segments; segNumber += 1) {
      stringSegment = string.slice(startIndex, endIndex);

      if (stringSegment.length === width) {
        stringSegments.push(stringSegment);
      } else {
        let difference = width - stringSegment.length;
        stringSegment += ' '.repeat(difference);
        stringSegments.push(stringSegment);
      }

      startIndex = endIndex;
      endIndex += width;
    }
  }

  let dashes = '-'.repeat(width);
  let spaces = ' '.repeat(width);
  
  if (stringLength < maxWidth) {
    console.log(`+${dashes}+`);
    console.log(`|${spaces}|`);
    console.log(`| ${string} |`);
    console.log(`|${spaces}|`);
    console.log(`+${dashes}+`);
  } else {
    console.log(`+ ${dashes} +`);
    console.log(`| ${spaces} |`);
    for (let index = 0; index < stringSegments.length; index += 1) {
      console.log(`| ${stringSegments[index]} |`);
    }
    console.log(`| ${spaces} |`);
    console.log(`+ ${dashes} +`);
  }
}
```

---

## 3. Stringy Strings

Write a function that takes one argument, a positive integer, and returns a string of alternating `'1'`s and `'0'`s, always starting with a `'1'`. The `length` of the string should match the given integer.  

Examples:

```javascript
stringy(6); 			// "101010"
stringy(9); 			// "101010101"
stringy(4);				// "1010"
stringy(7);				// "1010101"
```

###### My Solution

```javascript
function stringy(integer) {
  let string = '';
  let zeros = false;

  for (let index = 1; index <= integer; index += 1) {
    zeros ? string += '0' : string += '1';

    zeros = !zeros;
  }

  return string;
}
```

###### LS Solution

```javascript
function stringy(size) {
  let result = '';
  
  for (let i = 0; i < size; i += 1) {
    if (i % 2 === 0) {
      result += '1';
    } else {
      result += '0';
    }
  }
  
  return result;
}
```

---

## 4. Fibonacci Number Location by Length

The Fibonacci series is a series of numbers (`1, 1, 2, 3, 5, 8, 13, 21, ...`) such that the first two numbers are `1` by definition, and each subsequent number is the sum of the two previous numbers. This series appears throughout the natural world.  

Computationally, the Fibonacci series is a simple series, but the results grow at an incredibly rapid rate. For example, the 100th Fibonacci number is 354,224,848,179,261,915,075—that's enormous, especially considering that it takes six iterations just to find the first 2-digit Fibonacci number.  

Write a function that calculates and returns the index of the first Fibonacci number that has the number of digits specified by the argument. (The first Fibonacci number has an index of `1`.)  

You may assume that the argument is always an integer greater than or equal to `2`.  

Examples:

```javascript
findFibonacciIndexByLength(2);       // 7
findFibonacciIndexByLength(10);      // 45
findFibonacciIndexByLength(16);      // 74
```

###### My Solution

```javascript
function fibonacci(location) {
  let firstNum = 1;
  let secondNum = 1;

  let result;

  if (location === 1 || location === 2) {
    return 1;
  } else {
    for (let index = 3; index <= location; index += 1) {
      result = firstNum + secondNum;
      firstNum = secondNum;
      secondNum = result;
    }
  }
  
  return result;
}

function findFibonacciIndexByLength(length) {
  let location = 0;
  let currentLocation = 1;

  while (location === 0) {
    let currentLength = String(fibonacci(currentLocation)).length;

    if (currentLength === length) {
      location = currentLocation;
    }

    currentLocation += 1;
  }

  return location;
}
```

###### LS Solution

```javascript
function findFibonacciIndexByLength(length) {
  let first = 1;
  let second = 1;
  let index = 2;
  let fibonacci;
  
  do {
    fibonacci = first + second;
    index += 1;
    first = second;
    second = fibonacci;
  } while (String(fibonacci).length < length);
  
  return index;
}
```

---

## 5. Right Triangles

Write a function that takes a positive integer, `n`, as an argument, and logs a right triangle whose sides each have `n` stars. The hypotenuse of the triangle (the diagonal side in the images below) should have one end at the lower-left of the triangle, and the other end at the upper-right.  

Examples:

```javascript
triangle(5);

    *
   **
  ***
 ****
*****

triangle(9);

        *
       **
      ***
     ****
    *****
   ******
  *******
 ********
*********
```

###### My Solution

```javascript
function triangle(n) {
  for (let stars = 1; stars <= n; stars += 1) {
    let line = ' '.repeat(n - stars) + '*'.repeat(stars);
    console.log(line);
  }
}
```

###### LS Solution

```javascript
function triangle(height) {
  let stars = 1;
  let spaces = height -1;
  
  for (let i = 0; i < height; i += 1) {
    console.log(repeat(' ', spaces) + repeat('*', stars));
    stars += 1;
    spaces -= 1;
  }
}

function repeat(char, count) {
  let repeated = '';
  
  for (let i = 0; i < count; i += 1) {
    repeated += char;
  }
  
  return repeated;
}
```

---

## 6. Madlibs

Madlibs is a simple game where you create a story template with "blanks" for words. You, or another player, then construct a list of words and place them into the story, creating an often silly or funny story as a result.  

Create a simple madlib program that prompts for a noun, a verb, an adverb, and an adjective, and injects them into a story that you create.  

Example:  

```
Enter a noun: dog
Enter a verb: walk
Enter an adjective: blue
Enter an adverb: quickly

// console output
Do you walk your blue dog quickly? That's hilarious!
```

###### My Solution

```javascript
let rlSync = require('readline-sync');

let noun = rlSync.question('Enter a noun: ');
let verb = rlSync.question('Enter a verb: ');
let adjective = rlSync.question('Enter an adjective: ');
let adverb = rlSync.question('Enter an adverb: ');

console.log(`Do you ${verb} your ${adjective} ${noun} ${adverb}? That's hilarious!`);
```

###### LS Solution

```javascript
const noun = prompt('Enter a noun:');
const verb = prompt('Enter a verb:');
const adjective = prompt('Enter an adjective:');
const adverb = prompt('Enter an adverb:');

const sentence1 = `Do you ${verb} your ${adjective} ${noun} ${adverb}? That's hilarious!`;
const sentence2 = `The ${adjective} ${noun} ${verb}s ${adverb} over the lazy dog.`;
const sentence3 = `The ${noun} ${adverb} ${verb}s up ${adjective} Joe's turtle.`;

console.log(sentence1);
console.log(sentence2);
console.log(sentence3);
```

---

## 7. Double Doubles

A double number is an even-length number whose left-side digits are exactly the same as its right-side digits. For example, `44`, `3333`, `103103`, and `7676` are all double numbers, whereas `444`, `334433`, and `107` are not.  

Write a function that returns the number provided as an argument multiplied by two, unless the argument is a double number; return double numbers as-is.  

Examples:  

```javascript
twice(37);          // 74
twice(44);          // 44
twice(334433);      // 668866
twice(444);         // 888
twice(107);         // 214
twice(103103);      // 103103
twice(3333);        // 3333
twice(7676);        // 7676
```

###### My Solution

```javascript
function twice(number) {
  let stringNumber = String(number);
  let size = stringNumber.length;

  if (size % 2 === 0) {
    let firstHalf = stringNumber.slice(0, size / 2);
    let secondHalf = stringNumber.slice(size / 2, size);

    if (firstHalf === secondHalf) {
      return number;
    }
  }

  return number * 2;
}
```

###### LS Solution

```javascript
function twice(number) {
  if (isDoubleNumber(number)) {
    return number;
  } else {
    return number * 2;
  }
}

function isDoubleNumber(number) {
  const stringNumber = String(number);
  const center = stringNumber.length / 2;
  const leftNumber = stringNumber.substring(0, center);
  const rightNumber = stringNumber.substring(center);
  
  return leftNumber === rightNumber;
}
```

---

## 8. Grade Book

Write a function that determines the mean (average) of the three scores passed to it, and returns the letter associated with that grade.  

Numerical score letter grade list:  

- 90 <= score <= 100: 'A'
- 80 <= score < 90: 'B'
- 70 <= score < 80: 'C'
- 60 <= score < 70: 'D'
- 0 <= score < 60: 'F'

Tested values are all between `0` and `100`. There is no need to check for negative values or values greater than 100.  

Examples:

```javascript
getGrade(95, 90, 93);    // "A"
getGrade(50, 50, 95);    // "D"
```

###### My Solution

```javascript
function getGrade(score1, score2, score3) {
  let meanScore = (score1 + score2 + score3) / 3;

  if (meanScore >= 90) {
    return 'A';
  } else if (meanScore >= 80) {
    return 'B';
  } else if (meanScore >= 70) {
    return 'C';
  } else if (meanScore >= 60) {
    return 'D';
  } else {
    return 'F';
  }
}
```

###### LS Solution

```javascript
function getGrade(grade1, grade2, grade3) {
  const average = (grade1 + grade2 + grade3) / 3;

  if (average >= 90 && average <= 100) {
    return 'A';
  } else if (average >= 80 && average < 90) {
    return 'B';
  } else if (average >= 70 && average < 80) {
    return 'C';
  } else if (average >= 60 && average < 70) {
    return 'D';
  } else {
    return 'F';
  }
}
```

---

## 9. Clean Up the Words

Given a string that consists of some words and an assortment of non-alphabetic characters, write a function that returns that string with all of the non-alphabetic characters replaced by spaces. If one or more non-alphabetic characters occur in a row, you should only have one space in the result (i.e., the result string should never have consecutive spaces).  

Examples:  

```javascript
cleanUp("---what's my +*& line?");    // " what s my line "
```

###### My Solution

```javascript
function cleanUp(text) {
  let newText = '';

  for (let index = 0; index < text.length; index += 1) {
    if (!!text[index].match(/[a-z]/i)) {
      newText += text[index];
    } else {
      if (newText[newText.length - 1] === ' ') {
        continue;
      } else {
        newText += ' ';
      }
    }
  }

  return newText;
}
```

###### LS Solution

```javascript
function cleanUp(text) {
  let cleanText = '';
  
  for (let i = 0; i < text.length; i += 1) {
    if (isLowerCaseLetter(text[i]) || isUpperCaseLetter(text[i])) {
      cleanText += text[i];
    } else if (cleanText[cleanText.length - 1] !== ' ') {
      cleanText += ' ';
    }
  }
  
  return cleanText;
}

const isLowerCaseLetter = (char) => char >= 'a' && char <= 'z';

const isUpperCaseLetter = (char) => char >= 'A' && char <= 'Z';
```

---

## 10. What Century is That

Write a function that takes a year as input and returns the century. The return value should be a string that begins with the century number, and ends with `'st'`, `'nd'`, `'rd'`, or `'th'` as appropriate for that number.  

New centuries begin in years that end with `01`. So, the years 1901 - 2000 comprise the 20th century.  

Examples:

```javascript
century(2000);        // "20th"
century(2001);        // "21st"
century(1965);        // "20th"
century(256);         // "3rd"
century(5);           // "1st"
century(10103);       // "102nd"
century(1052);        // "11th"
century(1127);        // "12th"
century(11201);       // "113th"
```

###### My Solution

```javascript
function century(year) {
  let result;

  if (year % 100 === 0) {
    result = String(parseInt(year / 100, 10));
  } else {
    result = String(parseInt(year / 100, 10) + 1);
  }

  let lastDigit = result[result.length - 1];
  let last2Digits = result.substring(result.length - 2);

  if (last2Digits === '11' || last2Digits === '12' || last2Digits === '13') {
    result += 'th';
  } else if (lastDigit === '1') {
    result += 'st';
  } else if (lastDigit === '2') {
    result += 'nd';
  } else if (lastDigit === '3') {
    result += 'rd';
  } else {
    result += 'th';
  }
  
  return result;
}
```

###### LS Solution

```javascript
function century(year) {
  let centuryNumber = Math.floor(year / 100) + 1;
  
  if (year % 100 === 0) {
    centuryNumber -= 1;
  }
  
  return String(centuryNumber) + centurySuffix(centuryNumber);
}

function centurySuffix(centuryNumber) {
  if (catchWithTh(centuryNumber % 100)) {
    return 'th';
  }
  
  let lastDigit = centuryNumber % 10;
  switch (lastDigit) {
    case 1: return 'st';
    case 2: return 'nd';
    case 3: return 'rd';
    default: return 'th';
  }
}

function catchWithTh(lastTwo) {
  return lastTwo === 11 || lastTwo === 12 || lastTwo === 13;
}
```

