##### JS210 - Small Problems > String and Text Processing

---

## Delete Vowels

### Problem

Write a function that takes an array of strings, and returns an array of the same strings values without the vowels (a, e, i, o, u).  

---

### Examples / Test Cases

```javascript
removeVowels(['abcdefghijklmnopqrstuvwxyz']);         // ["bcdfghjklmnpqrstvwxyz"]
removeVowels(['green', 'YELLOW', 'black', 'white']);  // ["grn", "YLLW", "blck", "wht"]
removeVowels(['ABC', 'AEIOU', 'XYZ']);                // ["BC", "", "XYZ"]
```

---

### Data Structure

**Input**

* An array whose elements are strings.

**Output**

* An array whose elements are strings with all vowels removed.

---

### Algorithm

**Abstractions:**

* Iterate over the elements of the array.
* Use the `replace` method to replace any vowels with an empty string, `''`.

**Methods/Functions/regex:**

* Use the following regex with the `replace` method, `/[aeiou]/ig`.
* Use `map` to iterate over the array since we are performing a transformation of each string.

---

### Code

```javascript
function removeVowels(strings) {
  return strings.map(string => {
    return string.replace(/[aeiou]/ig, '');
  });
}
```

---

### LS Solution

###### Approach/Algorithm

You can look at this exercise as containing two parts. The first part is transforming the array argument into another array. The second part is processing the strings and transforming them into new strings that do not have vowels. Note that the first part is dependent on the result of the second part (Hint: "nested?").  

###### Solution

```javascript
function removeVowels(stringArray) {
  const VOWELS = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  return stringArray.map(string => string.split('').map(char => {
    if (VOWELS.includes(char)) {
      return '';
    } else {
      return char;
    }
  }).join(''));
}
```

###### Discussion

The shape of this exercise is that of **transformation**. The intention is to process a given list of strings and remove the vowels from each string. Given this, the solution uses `Array.prototype.map` to transform each string element in the array. The transformation is done by converting the string into an array of characters and then mapping each *vowel* character to an empty string (`''`). After the solution transforms the characters, it joins them together and returns the resulting string as a new element of the new string array.  



