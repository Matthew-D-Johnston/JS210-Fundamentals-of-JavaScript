##### JS210 - Small Problems > String and Text Processing

---

### Problem

Write a function that takes a string argument, and returns `true` if all of the alphabetic characters inside the string are uppercase; `false` otherwise. Ignore characters that are not alphabetic.

---

### Examples / Test Cases

```javascript
isUppercase('t');               // false
isUppercase('T');               // true
isUppercase('Four Score');      // false
isUppercase('FOUR SCORE');      // true
isUppercase('4SCORE!');         // true
isUppercase('');                // true
```

---

### Data Structure

**Input**

* A string of characters.

**Output**

* A boolean: `true` if all of the alphabetic characters are uppercase; `false` otherwise.

---

### Algorithm

**Abstractions:**

* Essentially, if any lowercase letter exists then we should return `false`.
* Thus, we should test the input string to check for any lowercase letter.
* We could create a callback function that tests whether a letter is lowercase and pass that function to the `some()` method. If the `some()`method returns `true` then we will want our function to return `false`, and vice versa.

**Functions/Methods:**

* create a `lowercased` function that checks to see whether a character matches this regex `/[a-z]/g`. The function should return `true` if there is a match and `false` otherwise.
* Use the `lowercased` function as a call back function to the `some(lowercased)` method which is called on an array version of the split input string.
* Return the opposite value of what is returned by `some()`.

---

### Code

```javascript
function isUppercase(text) {
  return !text.split('').some(lowercased);
}

function lowercased(character) {
  return !!character.match(/[a-z]/g);
} 
```

---

### LS Solution

###### Solution

```javascript
function isUppercase(string) {
  return !/[a-z]/.test(string);
}
```

###### Discussion

This is one of the problems where you can take advantage of **regex** (regular expressions) to process strings. The solution uses a **regex pattern** with the `RegExp.prototype.test` method to determine if there are any lowercase letters in the `string` argument. The solution then uses the `!` (logical NOT) operator to reverse the boolean return value so that the function returns `false` if there are any lowercase letters.