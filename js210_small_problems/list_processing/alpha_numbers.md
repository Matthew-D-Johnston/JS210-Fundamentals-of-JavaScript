##### JS210 - Small Problems > List Processing

---

## Alphabetical Numbers

### Problem

Write a function that takes an array of integers between `0` and `19`, and returns an array of those integers sorted based on the English word for each number:  

> zero, one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen

---

### Examples / Test Cases

```javascript
alphabeticNumberSort(
   [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]);
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]
```

---

### Data Structure

**Input**

* An Array of Integers.

**Output**

* An Array of Integers ordered by their alphabetic equivalents.

---

### Algorithm

**Abstractions:**

* Convert each Integer to its alphabetic equivalent.
* Sort the Array alphabetically.
* Convert the names back to their Integer equivalents.

**Functions and Special Variables:**

* Create an Object with keys that are Integers and values that have the alphabetical equivalents of those Integers.
* Use `.map` to collect the converted values.
* Then use `.sort`
* Then use `.map` again to get back to integers.

**Implementation Steps:**

* Create Object and assign to `INTEGER_TO_ALPHA` constant.
* Iterate over the given Array, converting each element to its alphabetical equivalent and mapping to a new Array (`alphabeticEquivalent`).
* Sort the newly created Array.
* Iterate over the sorted Array, converting each element back to its Integer equivalent and mapping it to a new Array.
* Return that Array.

---

### Code

```javascript
const INTEGER_TO_ALPHA = {
  0: 'zero',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
}

function alphabeticNumberSort(numbers) {
  let alphaNumbers = numbers.map(number => INTEGER_TO_ALPHA[number]);
  let sortedAlphaNumbers = alphaNumbers.sort();
  return sortedAlphaNumbers.map(alphaNumber => {
    return Object.values(INTEGER_TO_ALPHA).indexOf(alphaNumber);
  });
}
```

---

### LS Solution

```javascript
function wordSort(num1, num2) {
  const NUMBER_WORDS = ['zero', 'one', 'two', 'three', 'four', 'five',
                        'six', 'seven', 'eight', 'nine', 'ten', 'eleven',
                        'twelve', 'thirteen', 'fourteen', 'fifteen',
                        'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  
  if (NUMBER_WORDS[num1] > NUMBER_WORDS[num2]) {
    return 1;
  } else if (NUMBER_WORDS[num1] < NUMBER_WORDS[num2]) {
    return -1;
  } else {
    return 0;
  }
}

function alphabeticNumberSort(array) {
  return array.sort(wordSort);
}
```

###### Discussion

For this exercise, the first part to consider is what data structure to use for looking up the word counterpart of each number. The solution handles this by providing an array of words mapped to their index. The second part to consider is how to sort the numbers. For this one, the solution leverages the `Array.prototype.sort` method.  

The `sort` method is a higher-order function that can be passed a sorting function as a callback. In this solution, the callback function passed to `sort` is the `wordSort` function. The `wordSort` function also defines the data structure used for the lookup. The function performs the comparison by comparing the word equivalent of each number (`num1` and `num2`) accessed through their indices.  

###### Further Exploration

The `Array.prototype.sort` method can also take a function expression as an argument. If you didn't use one the first time, try refactoring the solution using a function expression.

##### My Solution

```javascript
let wordSort = function (num1, num2) {
  const NUMBER_WORDS = ['zero', 'one', 'two', 'three', 'four', 'five',
                        'six', 'seven', 'eight', 'nine', 'ten', 'eleven',
                        'twelve', 'thirteen', 'fourteen', 'fifteen',
                        'sixteen', 'seventeen', 'eighteen', 'nineteen'];

  if (NUMBER_WORDS[num1] > NUMBER_WORDS[num2]) {
    return 1;
  } else if (NUMBER_WORDS[num1] < NUMBER_WORDS[num2]) {
    return -1;
  } else {
    return 0;
  }
}

function alphabeticNumberSort(array) {
  return array.sort(wordSort);
}
```

