##### JS210 - Small Problems > Medium Problems 1

---

## Rotation Part 3

### Problem

**Problem Description:**

Take the number `735291` and rotate it by one digit to the left, getting `352917`. Next, keep the first digit fixed in place and rotate the remaining digits to get `329175`. Keep the first two digits fixed in place and rotate again to get `321759`. Keep the first three digits fixed in place and rotate again to get `321597`. Finally, keep the first four digits fixed in place and rotate the final two digits to get `321579`. The resulting number is called the *maximum rotation* of the original number.  

Write a function that takes an integer as an argument and returns the maximum rotation of that integer. You can (and probably should) use the `rotateRightmostDigits` function from the previous exercise.  

---

### Examples / Test Cases

Examples:

```javascript
maxRotation(735291);          // 321579
maxRotation(3);               // 3
maxRotation(35);              // 53
maxRotation(105);             // 15 -- the leading zero gets dropped
maxRotation(8703529146);      // 7321609845
```

---

### Data Structure

**Input**

* An integer.

**Output**

* An integer, which represents a rotated version of the original integer.

**Intermediate Data Structures**

* Will transform the integer first to a string and then to individual digits within an array for ease of looping and using the `splice` method.

---

### Algorithm

* We can loop over each digit and use `splice` to remove each consecutive digit from the array.
* We then `push` that extracted digit from the array and append it to the end of the array.
* Once we have looped over the appropriate digits we can `join` the digits of the array and convert the resulting string back to a number.

---

### Code

```javascript
function maxRotation(number) {
  let digits = String(number).split('');

  for (let index = 0; index < digits.length - 1; index += 1) {
    digits.push(digits.splice(index, 1).pop());
  }

  return Number(digits.join(''));
}
```

---

### LS Solution

##### Solution

```javascript
function maxRotation(number) {
  for (let i = String(number).length; i > 1; i -= 1) {
    number = rotateRightmostDigits(number, i);
  }
  
  return number;
}
```

###### Discussion

With the use of the `rotateRightmostDigits` function from the previous exercise, this solution simply becomes a matter of repeatedly calling that function, passing the `number` and `i` as arguments. The variable `i` — representing the number of digits in the `number` argument — is decremented by `1` at the end of each iteration, all the way down until it reaches a value of `2`. It is not necessary to rotate all the way down to `1` because rotating rightmost by `1` has no effect.  

