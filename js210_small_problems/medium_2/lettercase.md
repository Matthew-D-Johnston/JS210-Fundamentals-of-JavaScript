##### JS210 - Small Problems > Medium Problems 2

---

## Lettercase Percentage Ratio

### Problem

**Problem Description:**

Write a function that takes a string and returns an object containing the following three properties:

- the percentage of characters in the string that are lowercase letters
- the percentage of characters that are uppercase letters
- the percentage of characters that are neither

You may assume that the string will always contain at least one character.

**Input/Output:**

* Input: a string of characters.
* Output: an object with three properties: 1) percent lowercase; 2) percent uppercase; and 3) neither.

**Definitions and Rules (explicit and implicit):**

* String: assume at least one character.
* Character: white spaces count as characters; thus, the total length of the string should give total characters.
* Object: the keys will be `lowercase`, `uppercase`, and `neither`; values will be to two decimal plays and are percentage values, thus not greater than `100.00` .
* Neither: any character that is not an alphabetic character.

**Mental Model:**

Given a string, we need to get the length in order to determine the total number of characters. Then we need to count the number of lowercase alphabetic characters, find the percentage of lowercase relative to the total, and store the result in an object. Then, do the same for all uppercase letters. The difference between the total number of characters and the total combined alphabetic characters will provide the number of neither lower nor uppercase characters, which we can use get the total percentage for the 'neither' category.

---

### Examples / Test Cases

```javascript
letterPercentages('abCdef 123');
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

letterPercentages('AbCd +Ef');
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

letterPercentages('123');
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }

letterPercentages('a');
// { lowercase: "100.00", uppercase: "0.00", neither: "0.00" }
```

---

### Data Structure

**Input:**

* A string of characters.
* Will contain at least one character.

**Output:**

* An object with three properties: `lowercase`, `uppercase`, and `neither`.
* The values of the properties should be strings and formatted to two decimal places.

**Intermediate Data Structures:**

* Will need to deal with numbers in order to calculate the percentages.
* But then will want to convert them to strings when stored in the object.

---

### Algorithm

* Input parameter: `text`
* Declare a `results` variable and assign it to an empty object, `{}`.
* Declare a `charCount` variable and assign it to the return value of `text.length`
* Declare a `lowercasePercentage` and assign it to the return value of `(text.match(/[a-z]/g).length / charCount).toFixed(2) `
* Declare a `uppercasePercentage` and assign it to the return value of `(text.match(/[A-Z]/g).length / charCount).toFixed(2)`
* Declare a `neitherPercentage` and assign it to the return value of `((charCount - (lowercaseCount + uppercaseCount)) / charCount).toFixed(2)`.
* `return { lowercase: lowercasePercentage; uppercase: uppercasePercentage; neither: neitherPercentage }`

---

### Code

```javascript
function letterPercentages(text) {
  let charCount = text.length;
  let lowercaseCount = text.match(/[a-z]/g) ? text.match(/[a-z]/g).length : 0;
  let uppercaseCount = text.match(/[A-Z]/g) ? text.match(/[A-Z]/g).length : 0;
  let lowercasePercent = (lowercaseCount / charCount) * 100;
  let uppercasePercent = (uppercaseCount / charCount) * 100;
  let neitherPercent = 100 - (lowercasePercent + uppercasePercent);

  return { lowercase: lowercasePercent.toFixed(2),
           uppercase: uppercasePercent.toFixed(2),
           neither:   neitherPercent.toFixed(2),
         };
}
```

---

### LS Solution

##### Hint: Algorithm

This exercise is a string processing problem. You can either convert the string into an array and use list processing (iteration perhaps?) to gather and tally the characters, or use regex to get the characters that match a particular pattern. Once you have the characters, you can simply get the quantity for each category, divide the quantity by the `length` of the string, and format the result as needed.  

##### Solution

```javascript
function letterPercentages(string) {
  const count = string.length;
  return {
    lowercase: (((string.match(/[a-z]/g) || []).length / count) * 100).toFixed(2),
    uppercase: (((string.match(/[A-Z]/g) || []).length / count) * 100).toFixed(2),
    neither: (((string.match(/[^a-z]/gi) || []).length / count) * 100).toFixed(2),
  };
}
```

###### Discussion

The solution to this problem may be concise, but there are many things happening on each single line of the object literal. Let's break down the first of these three similar lines. In particular, we will look at the expression that makes up the value of the `lowercase` property:  

- `(string.match(/[a-z]/g) || [])` : Returns either an array of the matches for lowercase letters, or an empty array `[]`. `String.prototype.match` returns `null` if no matches are found, so the logical OR operator (`||`) is used to ensure that the overall expression will always return an array, which allows the `length` property to be accessed without raising an error.
- `((string.match(/[a-z]/g) || []).length / count) * 100` : Returns the letter percentage as a number.
- `(((string.match(/[a-z]/g) || []).length / count) * 100).toFixed(2)` : Formats the percentage as a number string rounded to two decimal places.

 