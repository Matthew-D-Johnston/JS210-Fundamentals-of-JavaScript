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

