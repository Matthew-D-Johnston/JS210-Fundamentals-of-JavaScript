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

