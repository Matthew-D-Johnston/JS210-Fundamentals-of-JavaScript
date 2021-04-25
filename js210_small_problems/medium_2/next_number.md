##### JS210 - Small Problems > Medium Problems 2

---

## Next Featured Number Higher than a Given Value

### Problem

**Problem Description:**

A *featured number* (something unique to this exercise) is an odd number that is a multiple of `7`, with all of its digits occurring exactly once each. For example, `49` is a featured number, but `98` is not (it is not odd), `97` is not (it is not a multiple of `7`), and `133` is not (the digit `3` appears twice).  

Write a function that takes an integer as an argument and returns the next featured number greater than the integer. Issue an error message if there is no next featured number.  

NOTE: The largest possible featured number is `9876543201`.  

**Definitions and Rules:**

* Featured number:
  * odd number
  * multiple of 7
  * all digits are unique
* Limit: `9876543201`
* If no next featured number, then issue error message.

**Mental Model:**

Take an integer. Compare it to successive iterations of multiples of seven that are greater than it. If a multiple of seven results in a number that is odd and whose digits are all unique, then we want to return that number. If either of those other two conditions are not met, then we must continue iterating, incrementing the comparison value by 7. If this comparison value ever becomes greater than the limit--9876543201--then issue the error message.

---

### Examples / Test Cases

```javascript
featured(12);           // 21
featured(20);           // 21
featured(21);           // 35
featured(997);          // 1029
featured(1029);         // 1043
featured(999999);       // 1023547
featured(999999987);    // 1023456987
featured(9876543186);   // 9876543201
featured(9876543200);   // 9876543201
featured(9876543201);   // "There is no possible number that fulfills those requirements."
```

---

### Data Structure

**Input:**

* A number (an integer).

**Output:**

* A number that represents the next _featured_ number that is greater than the input integer.
* Or an error message if there is no next featured number.

**Intermediate Data Structures:**

* Use a string for the error message.

---

### Algorithm

* The algorithm will want to incorporate some form of loop that increments by 7.
* The conditions for breaking out of the loop are:
  * The number being incremented is odd and all of the numbers digits are unique.
  * Or, the number surpasses the limit.
* This suggests a `while` loop should be used where the condition is `while featuredNum < 9876543201`.
* If we ever break out of the loop without a value being returned, we can just return `"There is no possible number that fulfills those requirements."`.
* Outside the loop, we want to declare a `featuredNum` variable.
* We'll also give `7` a name in the form of a constant variable: `INCREMENTER`
* `let featuredNum = int + (INCREMENTER - (int % INCREMENTER))`
* Inside the loop:
* test if `featuredNum` is odd
  * if `featuredNum % 2 !== 0`.
* test if each digit of `featuredNum` is unique:
  * convert to string
  * iterate over the string, adding each character to a new string if the character doesn't exist already in the new string. 
  * If the character does exist, then return `false` because the number doesn't contain unique digits.

---

### Code

```javascript
function featured(num) {
  const INCREMENTER = 7;
  const LIMIT = 9876543201;
  let featuredNum = num + (INCREMENTER - (num % INCREMENTER));

  while (featuredNum <= LIMIT) {
    if (isOdd(featuredNum) && uniqueDigits(featuredNum)) {
      return featuredNum;
    }

    featuredNum += INCREMENTER;
  }

  return 'There is no possible number that fulfills those requirements.';
}

function uniqueDigits(integer) {
  let stringInteger = String(integer);
  let testStringInt = '';

  for (let index = 0; index < stringInteger.length; index += 1) {
    if (testStringInt.includes(stringInteger[index])) {
      return false;
    } else {
      testStringInt += stringInteger[index];
    }
  }

  return true;
}

function isOdd(integer) {
  return (integer % 2) !== 0;
}
```

---

### LS Solution

##### Solution

```javascript
function featured(number) {
  const MAX_FEATURED = 9876543201;
  let featuredNum = toOddMultipleOf7(number);
  
  do {
    if (allUnique(featuredNum)) {
      return featuredNum;
    }
    
    featuredNum += 14;
  } while (featuredNum <= MAX_FEATURED);
  
  return 'There is no possible number that fulfills those requirements.';
}

function toOddMultipleOf7(number) {
  do {
    number += 1;
  } while (number % 2 === 0 || number % 7 !== 0);
}

function allUnique(number) {
  let digits = String(number).split('');
  let seen = {};
  
  for (let idx = 0; idx < digits.length; idx += 1) {
    if (seen[digits[idx]]) {
      return false;
    }
    
    seen[digits[idx]] = true;
  }
  
  return true;
}
```

###### Discussion

The algorithm for this problem is less complicated than it looks. The solution just has to increment a number and check whether it meets the criteria of a featured number. The challenge is in doing this efficiently; otherwise, there will be many numbers to go through, which will take a significant amount of time.  

On this note, the solution uses a function and a mathematical approach that work together to improve the processing efficiency. The `toOddMultipleOf7` function returns the next number that is both a multiple of `7` and an odd number. Once you have this value, you just need to increment it in steps of 14 to cycle through all of the odd multiples of 7. Neat trick, and it makes the program significantly faster.  

The `featured` function checks each multiple to see whether all the digits are unique. Since it increments the starting number by 14 during each iteration, there is no need to determine whether the number is odd or a multiple of 7 -- we already know it is.  

The `allUnique` function uses a `seen` object to determine whether a digit already exists in the number. If the function finds that a digit appears more than once while iterating over the digits, then the number is not a featured number.  

