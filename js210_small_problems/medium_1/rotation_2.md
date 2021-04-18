##### JS210 - Small Problems > Medium Problems 1

---

## Rotation Part 2

### Problem

**Problem Description:**

Write a function that rotates the last `n` digits of a `number`. For the rotation, rotate by one digit to the left, moving the first digit to the end.  

Examples:

```javascript
rotateRightmostDigits(735291, 1);      // 735291
rotateRightmostDigits(735291, 2);      // 735219
rotateRightmostDigits(735291, 3);      // 735912
rotateRightmostDigits(735291, 4);      // 732915
rotateRightmostDigits(735291, 5);      // 752913
rotateRightmostDigits(735291, 6);      // 352917
```

**Inputs/Outputs:**

* Inputs: a number to perform a rotation on and a number representing what digit of the other number to perform the rotation on.
* Outputs: the rotated number.

**Definitions and Rules (explicit and implicit):**

* Rotation: take one of the number's digits and append it to the end of the number; the other numbers shift to the lift to fill the empty space left by the rotation.
* What digit is being rotated: the number given as an input tells us how many digits, starting from the right, to traverse in order to locate the digit to be rotated.
* What if the number for locating the digit is greater than the number of digits? Let's do something that makes the modifies the input so that the number given will always be less than or equal to the number of digits. Thus, if the number to rotate only has six digits, if the number given for siginfiying the digit to rotate is 8, then we assign the number the value `8 % 6`, which should equal `2`.
* If the number passed in for selecting the digit is `0`, then don't perform any rotation.
* We'll assume that we all always get integer inputs.

**Mental Model:**

We are given two numbers, one is a number to perform a rotation on and the other tells us which digit needs to be removed from its starting position and appended to the end of the number. The last digit of the number has an index of 1 and it is the starting position. To reach other positions we count from the starting position and move along to the left.

---

### Examples / Test Cases

```javascript
rotateRightmostDigits(24723, 3);					// 24237
rotateRightmostDigits(34, 2);							// 43
rotateRightmostDigits(528, 5);						// 582
rotateRightmostDigits(0, 1);							// 0
rotateRightmostDigits(24623, 0);					// 24623
rotateRightmostDigits(24623, 1);					// 24623
```

---

### Data Structure

**Input:**

* Two integers.

**Output:**

* One integer.

**Intermediate Data Structures:**

* Model the integer as an array of digits.
* To do that we will need to turn the integer into a string first and then split it.

---

### Algorithm

* First thing to do is to get our first argument, which will be called `number` and transform into a string that we then split into individual digits stored in an array, called `digits`.
* We then want to find the length of this array.
* While the `position` argument is greater than the length of the array we will want to find the remainder of dividing the `position` by the length of the array: `position %= digits.length`.
* We now have `digits`, an array of digits of the original integer, and the cleaned `position` variable.
* We also want to make the `position` variable negative, thus we can multiply it by `-1`.
* We can then use the `splice` method to extract the digit at the `position` of the `digits` array. This will remove that digit but also return the element within an array that we can then concatenate to the end of the array: `let rotated = digits.concat(digits.splice(position, 1))`.
* Then we need to join the elements of the array and transform them back into a number: `return Number(rotated.join(''))`

---

### Code

```javascript
function rotateRightmostDigits(number, position) {
  if (position === 0) {
    return number;
  }

  let digits = number.toString().split('');
  position = -(position % digits.length);
  let rotated = digits.concat(digits.splice(position, 1));
  return Number(rotated.join(''));
}
```

---

### LS Solution

##### Understand the Problem

Let's break down the problem and build a mental model before we attempt to solve it.

- Input

  : two numbers

  - the original `number`
  - last `n` digits to rotate

- **Output**: the rotated number

- Rules

  - rotate the last `n` digits of the original `number`
  - leave the first digits (not part of the last `n` digits) in the same order
  - apply the same rule for the rotation as in the previous exercise: slice off the first digit and append it to the end of the `number`
  - join the first digits with the last `n` rotated digits, and return it as a number

##### Examples / Test Cases

The description for this exercise already provides us with a sufficient amount of examples.

##### Data Structure and Algorithm

Data structure considerations:

If we look carefully at the rules we came up with, we can see verbs such as "slice", "append", and "join". This indicates that even though the inputs and the output are numbers, our ideal data structure is to operate on the numbers as strings.

Algorithm:

- convert the original `number` to a string
- split the string into two parts: the part to remain unchanged and the part to be rotated
- rotate the second part
- join the first part back together with the rotated second part
- convert the string to a number and return it

##### Solution

```javascript
function rotateRightmostDigits(number, n) {
  const numberString = String(number);
  const firstPart = numberString.slice(0, numberString.length - n);
  const secondPart = numberString.slice(numberString.length - n);
  const resultString = firstPart + rotateString(secondPart);
  
  return Number(resultString);
}
```

