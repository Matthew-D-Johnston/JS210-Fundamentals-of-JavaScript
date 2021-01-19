##### JS210 - Small Problems > Easy 5

---

### 1. Double Char Part 1

Write a function that takes a string, doubles every character in the string, and returns the result as a new string.  

Examples:  

```javascript
repeater('Hello');        // "HHeelllloo"
repeater('Good job!');    // "GGoooodd  jjoobb!!"
repeater('');             // ""
```

###### My Solution

```javascript
function repeater(text) {
  let doubled = '';

  for (let index = 0; index < text.length; index += 1) {
    doubled += text[index].repeat(2);
  }

  return doubled;
}
```

###### LS Solution

```javascript
function repeater(string) {
  const stringArray = [];
  
  for (let i = 0; i < string.length; i += 1) {
    stringArray.push(string[i], string[i]);
  }
  
  return stringArray.join('');
}
```

###### Discussion

The solution initializes a `stringArray`, then iterates through the `string` argument, each time appending two of the current character to `stringArray`. Finally, the solution returns the result of joining together the elements of `stringArray`.  

---

### 2. Double Char Part 2

Write a function that takes a string, doubles every consonant character in the string, and returns the result as a new string. The function should not double vowels (`'a'`,`'e'`,`'i'`,`'o'`,`'u'`), digits, punctuation, or whitespace.  

Examples:  

```javascript
doubleConsonants('String');          // "SSttrrinngg"
doubleConsonants('Hello-World!');    // "HHellllo-WWorrlldd!"
doubleConsonants('July 4th');        // "JJullyy 4tthh"
doubleConsonants('');                // ""
```

###### My Solution

```javascript
const consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n',
                    'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];

function doubleConsonants(text) {
  let finishedText = '';

  for (let i = 0; i < text.length; i += 1) {
    if (consonants.includes(text[i].toLowerCase())) {
      finishedText += text[i].repeat(2);
    } else {
      finishedText += text[i];
    }
  }

  return finishedText;
}
```

###### LS Solution

```javascript
const CONSONANTS = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm',
                  'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];

function doubleConsonants(string) {
  const stringArray = [];
  
  for (let i = 0; i < string.length; i += 1) {
    stringArray.push(string[i]);
    if (CONSONANTS.includes(string[i].toLowerCase())) {
      stringArray.push(string[i]);
    }
  }
  
  return stringArray.join('');
}
```

###### Discussion

This exercise is nearly identical to the previous exercise, so the solution is also similar. The main difference is that this solution needs to check each character to see if it is a consonant. This can be done in a variety of ways, but the solution does it in the following way. It creates an array of lowercase consonants, then iterates over each character of the input `string`, checking to see if the character exists in the `CONSONANTS` array. To account for uppercase consonants, the solution converts each character to lowercase before performing the check.

---

### 3. Reverse Number

Write a function that takes a positive integer as an argument, and returns that number with its digits reversed.  

Examples:  

```javascript
reverseNumber(12345);    // 54321
reverseNumber(12213);    // 31221
reverseNumber(456);      // 654
reverseNumber(12000);    // 21 -- Note that zeros get dropped!
reverseNumber(1);        // 1
```

###### My Solution

```javascript
function reverseNumber(number) {
  return parseInt(String(number).split('').reverse().join(''), 10);
}
```

###### LS Solution

```javascript
function reverseNumber(number) {
  const numberStringArray = String(number).split('');
  return parseInt(numberStringArray.reverse().join(''), 10);
}
```

###### Discussion

The approach used in this solution leverages the `Array.prototype.reverse` method. The solution converts the `number` argument to a string and splits it using an empty string (`''`) as a separator. The solution stores the result in the `numberStringArray` variable. The solution then reverses the array, joins it together with an empty string (`''`) as a separator, passes the resulting string to `parseInt` to convert it to a number, and returns the result.  

Notice the `radix` of `10` as a second argument to `parseInt`. This gives the `parseInt` function the base by which it parses the number. If the number string contains leading zeroes (e.g., `'00021'`), `parseInt` will convert the number to `21` (base 10) instead of `17` (base 8). Without the `radix` of `8`, `parseInt` defaults to base 10 and parses the number string as such, even if there are leading zeroes which typically denote base 8.  

---

### 4. Get the Middle Character

Write a function that takes a non-empty string argument, and returns the middle character(s) of the string. If the string has an odd `length`, you should return exactly one character. If the string has an even `length`, you should return exactly two characters.  

Examples: 

```javascript
centerOf('I Love JavaScript'); // "a"
centerOf('Launch School');     // " "
centerOf('Launch');            // "un"
centerOf('Launchschool');      // "hs"
centerOf('x');                 // "x"
```

###### My Solution

```javascript
function centerOf(text) {
  let length = text.length;
  let midpoint = Math.floor(length / 2);

  if (length % 2 === 0) {
    return text.slice(midpoint - 1, midpoint + 1);
  } else{
    return text.slice(midpoint, midpoint + 1);
  }
}
```

###### LS Solution

```javascript
function centerOf(string) {
  if (string.length % 2 === 1) {
    let centerIndex = (string.length - 1) / 2;
    return string[centerIndex];
  } else {
    let leftIndex = string.length / 2 - 1;
    return string.substring(leftIndex, leftIndex + 2);
  }
}
```

###### Discussion

This is mildly tricky, but not terribly so. The main difficulty here is understanding the indexes you're working with. When faced with a complex indexing problem, it's sometimes easiest to walk through one or two examples so you can wrap your brain around what you need to do.  

Let's start by looking at a string with an odd length. We'll use `Turbo` as our example - it has a length of `5`:

| string |  T   |  u   |  r   |  b   |  o   |
| :----- | :--: | :--: | :--: | :--: | :--: |
| index  |  0   |  1   |  2   |  3   |  4   |
| center |      |      |  *   |      |      |

It's easy enough to see that the middle character, `r`, is at index position 2 of this string. If we were to repeat this same procedure with a string of length 7, the index would be `3`. Likewise, the middle character of a string of length 3 is at index 1. There's a pattern here:

| length | center index     |
| :----: | :--------------- |
|   5    | (5 - 1) / 2 => 2 |
|   7    | (7 - 1) / 2 => 3 |
|   3    | (3 - 1) / 2 => 1 |

We can generalize this pattern: if `n` is an odd number and you have an string of length `n`, then the middle character is at index `(n - 1) / 2`. To get the middle character, we just have to retrieve the character at that index, e.g., `string[2]` for a 5 character string.  

Things are just a little more complicated for even-length strings, but we can use the same approach: look at a few test examples. We'll use `Subway` as our example - it has a length of `6`:

| string |  S   |  u   |  b   |  w   |  a   |  y   |
| :----- | :--: | :--: | :--: | :--: | :--: | :--: |
| index  |  0   |  1   |  2   |  3   |  4   |  5   |
| center |      |      |  *   |  *   |      |      |

It's easy enough to see that the middle characters, `b` and `w`, are at index positions 2 and 3 of this string. If we were to repeat this same procedure with a string of length 8, the indexes would be `3` and `4`. Likewise, the middle characters of a string of length 4 are at indexes 1 and 2. Again, there's a pattern:

| length | right index | left index |
| :----: | :---------- | :--------- |
|   6    | 6 / 2 => 3  | 3 - 1 => 2 |
|   8    | 8 / 2 => 4  | 4 - 1 => 3 |
|   4    | 4 / 2 => 2  | 2 - 1 => 1 |

Given the left index we've calculated, we can now use the `substring` method to extract the two characters starting at the left index as the middle characters. For our 6 character example, `string.substring(leftIndex, leftIndex + 2)`/

---

### 5. Always Return Negative

Write a function that takes a number as an argument. If the argument is a positive number, return the negative of that number. If the argument is a negative number, return it as-is.  

Examples:  

```javascript
negative(5);     // -5
negative(-3);    // -3
negative(0);     // -0
```

###### My Solution

```javascript
function negative(number) {
  return -Math.abs(number);
}
```

###### LS Solution

```javascript
function negative(number) {
  return Math.abs(number) * -1;
}
```

###### Discussion

The solution uses the `Math.abs` method to convert any type of `number` argument to a positive number. The solution then multiplies this positive number by `-1` to convert it to a negative number, and returns the result.  

###### Further Exploration

An alternative solution would be to use the ternary operator (e.g., `a ? b : c`). If you haven't already used it, try refactoring the solution using the ternary operator.  

###### My FE Solution

```javascript
function negative(number) {
  return number >= 0 ? -number : number;
}
```

---

### 6. Counting Up

Write a function that takes an integer argument, and returns an array containing all integers between `1` and the argument (inclusive), in ascending order.  

You may assume that the argument will always be a positive integer.  

Examples:

```javascript
sequence(5);    // [1, 2, 3, 4, 5]
sequence(3);    // [1, 2, 3]
sequence(1);    // [1]
```

###### My Solution

```javascript
function sequence(integer) {
  let integers = [];

  for (let currentInt = 1; currentInt <= integer; currentInt += 1) {
    integers.push(currentInt);
  }

  return integers;
}
```

###### LS Solution

```javascript
function sequence(limit) {
  const result = [];
  
  for (let i = 1; i <= limit; i += 1) {
    result.push();
  }
  
  return result;
}
```

###### Discussion

The solution uses a `for` loop to create the sequence and store it in the `result` array. The key parts are determining the starting value of the loop (`i = 1`) and determining the stopping condition (`i <= limit`).

---

### 7. Name Swapping

Write a function that takes a string argument consisting of a first name, a space, and a last name, and returns a new string consisting of the last name, a comma, a space, and the first name.  

Examples:

```javascript
swapName('Joe Roberts');    // "Roberts, Joe"
```

###### My Solution

```javascript
function swapName(name) {
  return name.split(' ').reverse().join(', ');
}
```

###### LS Solution

```javascript
function swapName(name) {
  return name.split(' ').reverse().join(', ');
}
```

###### Discussion

Given a full name as a string and a space as a separator, the solution uses the `String.prototype.split` method to get an array of words (e.g., `['Joe', 'Roberts']`). The solution then uses `Array.prototype.reverse` to get `['Roberts', 'Joe']`, and finally, uses `Array.prototype.join`, with a separator string containing a comma and a space (`', '`), to return the desired result.  

###### Further Exploration

What if the person had more than one first name? Refactor the current solution so that it can accommodate this.  

###### My FE Solution

```javascript
function swapName(name) {
  let names = name.split(' ');
  let lastName = names[names.length - 1];
  let firstNames = names.slice(0, names.length - 1);

  return `${lastName}, ${firstNames.join(' ')}`;
}
```

---

### 8. Sequence Count

Create a function that takes two integers as arguments. The first argument is a `count`, and the second is the starting number of a sequence that your function will create. The function should return an array containing the same number of elements as the `count` argument. The value of each element should be a multiple of the starting number.  

You may assume that the `count` argument will always be an integer greater than or equal to `0`. The starting number can be any integer. If the `count` is `0`, the function should return an empty array.  

Examples:

```javascript
sequence(5, 1);          // [1, 2, 3, 4, 5]
sequence(4, -7);         // [-7, -14, -21, -28]
sequence(3, 0);          // [0, 0, 0]
sequence(0, 1000000);    // []
```

###### My Solution

```javascript
function sequence(count, start) {
  let result = [];

  for (let i = 1; i <= count; i += 1) {
    result.push(start * i);
  }

  return result;
}
```

###### LS Solution

```javascript
function sequence(count, startNum) {
  const result = [];
  let sum = 0;
  
  for (let i = 0; i < count; i += 1) {
    result.push(sum += startNum);
  }
  
  return result;
}
```

###### Discussion

The solution uses a `for` loop to create the sequence and store it in the `result` array. The loop uses the `count` argument to determine the appropriate number of iterations. During each iteration, the solution increments `sum` by `startNum`, and pushes the new value of `sum` to the `result` array. After the loop, the solution returns the `result` array.  

---

### 9. Reverse It Part 1

Write a function that takes a string argument, and returns a new string containing the words from the string argument in reverse order.  

Examples:  

```javascript
reverseSentence('');                       // ""
reverseSentence('Hello World');            // "World Hello"
reverseSentence('Reverse these words');    // "words these Reverse"
```

###### My Solution

```javascript
function reverseSentence(text) {
  return text.split(' ').reverse().join(' ');
}
```

###### LS Solution

A buggy version of the solution for this exercise is shown below. For an extra challenge, try debugging this solution before looking at the real solution.

##### buggy solution

```javascript
function reverseSentence(string) {
  return string.split('').reverse.join('');
}
```

##### real solution

```javascript
function reverseSentence(string) {
  return string.split(' ').reverse().join(' ');s
}
```

###### Discussion

The solution uses one `String` method and two `Array` methods: `String.prototype.split`, `Array.prototype.reverse`, and `Array.prototype.join`. The `split` method converts the `string` argument into an array of words. The `reverse` method returns the words in reverse order. Finally, the `join` method joins the words back together into a space separated string, which is returned by the function.  

For this exercise, the main thing to be careful of is making sure that the separator argument passed to `split` and `join` is a space, not an empty string; otherwise the `string` would be split into an array of characters instead of words, and the array would be joined together without any spaces.  

---

### 10. Reverse It Part 2

Write a function that takes a string argument containing one or more words, and returns a new string containing the words from the string argument. All five-or-more letter words should have their letters in reverse order. The string argument will consist of only letters and spaces. Words will be separated by a single space.  

Examples:

```javascript
reverseWords('Professional');             // "lanoisseforP"
reverseWords('Walk around the block');    // "Walk dnuora the kcolb"
reverseWords('Launch School');            // "hcnuaL loohcS"
```

###### My Solution

```javascript
function reverseWords(string) {
  let result = [];
  let words = string.split(' ');

  for (let i = 0; i < words.length; i += 1) {
    let word = words[i];

    if (word.length >= 5) {
      result.push(word.split('').reverse().join(''));
    } else {
      result.push(word);
    }
  }

  return result.join(' ');
}
```

###### LS Solution

```javascript
function reverseWords(string) {
  const words = string.split(' ');
  const reversedWords = [];
  
  for (let i = 0; i < words.length; i += 1) {
    let currentWord = words[i];
    if (currentWord.length >= 5) {
      reversedWords.push(currentWord.split('').reverse().join(''));
    } else {
      reversedWords.push(currentWord);
    }
  }
  
  return reversedWords.join(' ');
}
```

###### Discussion

This version of the "Reverse It" exercise is a little bit more complicated. The solution still splits the string argument into an array of words, but instead of reversing the order of words within the string, the solution reverses the order of letters within words containing five-or-more letters.  

During each iteration of the `for` loop, the solution checks if the `length` of the `currentWord` is greater than or equal to `5`; if it is, the solution reverses the letters of the `currentWord` using a similar approach as the previous "Reverse It" exercise, but with a different separator argument. The solution then pushes the reversed word to the `reversedWords` array. If the `currentWord` is less than `5` letters, the solution pushes the `currentWord` to the array as-is.  

