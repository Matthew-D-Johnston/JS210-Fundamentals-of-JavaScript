##### JS210 - Small Problems > String and Text Processing

---

## Lettercase Counter

### Problem

Write a function that takes a string and returns an object containing three properties: one representing the number of characters in the string that are lowercase letters, one representing the number of characters that are uppercase letters, and one representing the number of characters that are neither.  

---

### Examples / Test Cases

Examples:

```javascript
letterCaseCount('abCdef 123');  // { lowercase: 5, uppercase: 1, neither: 4 }
letterCaseCount('AbCd +Ef');    // { lowercase: 3, uppercase: 3, neither: 2 }
letterCaseCount('123');         // { lowercase: 0, uppercase: 0, neither: 3 }
letterCaseCount('');            // { lowercase: 0, uppercase: 0, neither: 0 }
```

---

### Data Structure

**Input**

* A string.

**Output**

* An Object with three properties: 1) a `lowercase`  key whose value is an integer; 2) an `uppercase` key whose value is an integer; and 3) a `neither` key whose value is an integer.

---

### Algorithm

**Abstractions:**

* I could do three `match` calls one for each case that we are trying to identify. This would return an array of the characters that meet the match conditions, defined by a regex. We just need to count the length of the array and use that as the value in our object.

**regex**

* for `lowercase`: `/[a-z]/g`
* for `uppercase`: `/[A-Z]/g`
* for `neither`: `/[^a-zA-Z]/g`

---

### Code

```javascript
function letterCaseCount(text) {
  return {
    lowercase: countMatches(text, /[a-z]/g),
    uppercase: countMatches(text, /[A-Z]/g),
    neither:   countMatches(text, /[^a-zA-Z]/g),
  };
}

function countMatches(text, regex) {
  if (text.match(regex)) {
    return text.match(regex).length;
  } else {
    return 0;
  }
}
```

---

### LS Solution

###### Solution

```javascript
function letterCaseCount(string) {
  const lowerArray = string.match(/[a-z]/g) || [];
  const upperArray = string.match(/[A-Z]/g) || [];
  const neitherArray = string.match(/[^a-z]/gi) || [];
  
  return {
    lowercase: lowerArray.length,
    uppercase: upperArray.length,
    neither: neitherArray.length,
  };
}
```

###### Discussion

The solution uses the `String.prototype.match` method to process the `string` argument. The method takes a `regex` pattern as an argument and returns an array of characters that match the pattern. The solution first gets an array of matches for each character type and assigns each array to its respective variable. If the solution does not find any matches, it sets the variable to an empty array (`[]`) so that an error will not be raised when the `length` property is accessed on the variable later. Finally, the solution returns an object with three properties, setting the value of each to the `length` of the corresponding array (i.e., the `lowercase` property has a value of `lowerArray.length`).  

The solution uses regular expressions to count each of the three types of characters. If you are not familiar with regex, a brief explanation is shown below.  

- `/[a-z]/g` : Checks if the character is a lowercase letter between `'a'` and `'z'`.
- `/[A-Z]/g` : Checks if the character is an uppercase letter between `'A'` and `'Z'`.
- `/[^a-z]/gi` : Checks if the character is neither an uppercase letter nor a lowercase letter.
- `g` : Tells the regex engine to search the entire string.
- `i` : Tells the regex engine to ignore case.

