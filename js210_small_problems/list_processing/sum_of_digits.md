##### JS210 - Small Problems > List Processing

---

## Sum of Digits

### Problem

Write a function that takes one argument, a positive integer, and returns the sum of its digits. Do this without using `for`, `while`, or `do...while` loops - instead, use a series of method calls to perform the sum.  

---

### Examples / Test Cases

Examples:

```
sum(23);           // 5
sum(496);          // 19
sum(123456789);    // 45
```

---

### Data Structure

**Input**

* An Integer.

**Output**

* An Integer representing the sum of the digits of the input Integer.

---

### Algorithm

**Abstractions:**

* Convert to a string.
* Split into individual digits.
* Convert each digit to a Number.
* Sum the individual Number digits.

**Methods/Functions:**

* `String()`
* `split('')`
* `reduce(sum, digit => Number(sum) + Number(digit))`

---

### Code

```javascript
function sum(int) {
  return String(int)
    .split('')
    .reduce((sum, digit) => Number(sum) + Number(digit));
}
```

